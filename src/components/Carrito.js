import { cartContext } from './CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom"


export const Carrito = () => {

  const {carrito,total,removerItem,limpiar} = useContext(cartContext)

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
        </div>
      }
    </>
  )
}