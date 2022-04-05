import { cartContext } from './CartContext'
import { useContext, useState} from 'react'
import { Link } from "react-router-dom"
import { serverTimestamp } from 'firebase/firestore'
import { pedido } from '../firebase/functionsFirebase'
import { toast } from 'react-toastify'

export const Carrito = () => {

  const [loading,setLoad] = useState(true)
  const [idPedido,setIdPedido] = useState('')

  // const [nombre,setNombre]=useState('')
  // const [telefono,setTelefono]=useState('')
  // const [mail,setMail]=useState('')

  const {carrito,total,removerItem,limpiar} = useContext(cartContext)

  // const handleChange = ({target}) => {
  //   console.log(target)
  //   switch(target.name){
  //     case 'nombre': setNombre(target.value)
  //     break;
  //     case 'telefono': setTelefono(target.value)
  //     break;
  //     case 'mail': setMail(target.value)
  //     break;
  //     default:
  //   }
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  const finalizarCompra = () => {
    toast.info('Procesando pedido...')

    const orden = {
      comprador: {
        nombre:'Lucas',
        telefono:'123123123',
        mail:'asdad@gmail.com',
      },
      items: carrito,
      date: serverTimestamp(),
      total: total,
    }

    pedido(orden)
      .then((res)=>{
        setIdPedido(res.id)
        toast.dismiss()
        toast.success('Su pedido se ha realizado correctamente',{autoClose:1000})
        

      }).catch((error)=>{
        toast.dismiss()
        toast.error('Ocurrió un error al realizar su pedido, intente nuevamente.')
      })
      .finally(()=>{
        setLoad(false)
      })
  }


  return(
    <>
      {carrito.length === 0 
      ? 
        <div className='carrito-vacio'>
          <h2>No hay productos en el carrito</h2>
          <Link to='/'>
            <button>Ir al catálogo</button>
          </Link>
        </div>
      :
        <div>
          {carrito.map(libro=>(
            <div key={libro.id}>
              <p>{libro.titulo}</p>
              <p>{libro.cant} x {libro.precio}</p>
              <p>Total parcial: ${libro.cant * libro.precio}</p>
              <button onClick={()=>{removerItem(libro.id)}}>Eliminar producto de carrito</button>
            </div>
          ))}
          <div>
            <p>Total: ${total}</p>
            <button onClick={()=>{limpiar()}}>Limpiar carrito</button>
          </div>
          <div className='form'>
            {/* <form onSubmit={handleSubmit}>
              <label htmlFor="nombre"><input id = "nombre" type="text" placeholder="Nombre" value={nombre} onChange={handleChange} required/></label>
              <label htmlFor="telefono"><input id = "telefono" type="text" placeholder="N° de teléfono" value={telefono} onChange={handleChange} required/></label>
              <label htmlFor="mail"><input id = "mail" type="text" placeholder="Mail" value={mail} onChange={handleChange} required/></label>
              <br/> */}
              <button className='btn-form' type = 'submit' onClick={finalizarCompra}>Finalizar compra</button>
            {/* </form> */}
            <br />
            {!loading ? 
            <div className='checkoutcarrito'>
              <h2>Pedido completado!</h2>
              <Link to="/checkout" state={{ idPedido: idPedido }}><button onClick={()=>{limpiar()}}>Ir al check out</button></Link>
            </div> 
            : null }
          </div>
        </div>
      }
    </>
  )
}