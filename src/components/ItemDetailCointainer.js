import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import {filtrar} from '../firebase/functionsFirebase'



const ItemDetailCointainer = () => {

  const [libro,setLibro] = useState({})
  const [loading,setLoad] = useState(true)

  const {idLib} = useParams()

  useEffect(()=>{
    toast.info('Cargando libro...')
    const pedido = filtrar('id',Number(idLib))

    pedido.then((resultado)=>{
      toast.dismiss()
      setLibro(resultado.docs[0].data())
      
    })
    .catch((error)=>{
      toast.dismiss()
      toast.error('Ocurrió un error al cargar el libro, intente nuevamente.')
    })
    .finally(()=>{
      setLoad(false)
    })
  },[idLib])

  return(
    <>
      {loading ? <h1>Cargando...</h1> : <div className='itemDetailContainer'> <ItemDetail libro = {libro}/> </div>}
    </>  
  )
  
}

export default ItemDetailCointainer

