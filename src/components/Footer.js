import React from 'react'
import { toast } from 'react-toastify'
import {consultaOrdenes, filtrar} from '../firebase/functionsFirebase'
import {useNavigate} from 'react-router-dom'

const Footer = () => {
  const [IDorden, setIDorden] = React.useState('')
  const [found,setFound] = React.useState(false)

  const navigate = useNavigate()

  const handleChange = ({target}) => {
    setIDorden(target.value)
  }

  const handleSubmit = () => {
    
    toast.info('Obteniendo datos de orden...')

    const pedido = filtrar(consultaOrdenes(),'__name__',IDorden)
    
    let orden;

    pedido.then((resultado)=>{
      if(resultado.docs.length > 0){
        toast.dismiss()
        setFound(true)
        orden = resultado.docs[0].data()
      }else{
        toast.dismiss()
        toast.error('No existe una orden con ese ID')
      }
      
      })
    .catch((error)=>{
      toast.dismiss()
      
      toast.error('Ocurrió un error al buscar la órden, intente nuevamente.')
    })
    .finally(()=>{
      navigate('/orden', { state:{IDorden: IDorden, orden:orden, found:found}})
      setIDorden('')
    })
  }

  return (
      <footer>
          <div className='buscador-orden'>
            <h4>Buscar orden por ID</h4>
            <input type='text' placeholder='Ingrese el ID' onChange={handleChange} value={IDorden}/>
            <button onClick={()=>{handleSubmit()}}>Buscar</button>
          </div>
      </footer>
    
  )
}

export default Footer