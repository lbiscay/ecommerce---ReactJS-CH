import React from 'react'
import { toast } from 'react-toastify'
import {consultaOrdenes, filtrar} from '../firebase/functionsFirebase'
import {useNavigate} from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  let ref = React.useRef()

  const handleSubmit = () => {
    
    if(ref.current.value === ''){
      toast.error('El campo de ID de orden no puede estar vacío.')
    }else{
      toast.info('Obteniendo datos de orden...')

      const pedido = filtrar(consultaOrdenes(),'__name__',ref.current.value)
      
      let orden;

      
      pedido.then((resultado)=>{
        if(resultado.docs.length > 0){
          toast.dismiss()
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
        navigate('/orden', { state:{IDorden: ref.current.value, orden:orden, found:orden ? true : false} })
        ref.current.value = ''
      })
    }
  }
  return (
      <footer>
          <div className='buscador-orden'>
            <h4>Buscar orden por ID</h4>
            <input type='text' placeholder='Ingrese el ID' ref={ref}/>
            <button onClick={()=>{handleSubmit()}}>Buscar</button>
          </div>
      </footer>
    
  )
}

export default Footer