import { useEffect, useState } from 'react'
import librosIniciales from '../librosIniciales'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'


const ItemDetailCointainer = () => {

  const [libro,setLibro] = useState({})
  const [loading,setLoad] = useState(true)

  const {idLib} = useParams()

  useEffect(()=>{
    toast.info('Cargando libro...')

    const pedido = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(librosIniciales)
      },2000)
    })
    pedido.then((data)=>{
      toast.dismiss()
      let libroxID = data.filter(n=>
         n.id === Number(idLib) 
      )
      
      setLibro(libroxID[0])
      
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
      {loading ? <h1>Cargando...</h1> : <div className='itemDetailContainer'> <ItemDetail libro= {libro}/> </div>}
    </>  
  )
  
}

export default ItemDetailCointainer

