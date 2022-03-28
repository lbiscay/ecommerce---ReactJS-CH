import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom'
import librosIniciales from '../librosIniciales'


export const ItemListContainer = (greeting) => {
  const [libros,setLibros] = useState([])
  const [loading,setLoad] = useState(true)

  const {idCat}= useParams()
  
  useEffect(()=>{
    toast.info('Cargando catálogo de libros')

    const pedido = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(librosIniciales)
      },2000)
    })
    pedido.then((data)=>{
      toast.dismiss()
      if(idCat === undefined){
        setLibros(data)
      }else{
        let librosxCat = data.filter(n=>
          n.URLCategoria === idCat
        )
        setLibros(librosxCat)
      }

    })
    .catch((error)=>{
      toast.dismiss()
      toast.error('Ocurrió un error al cargar el catálogo, intente nuevamente.')
    })
    .finally(()=>{
      setLoad(false)
    })
  },[idCat])

  return(
    <>
      {loading ? <h1>Cargando...</h1> : <div> <ItemList libros= {libros}/> </div>}
    </>  
  )
}




