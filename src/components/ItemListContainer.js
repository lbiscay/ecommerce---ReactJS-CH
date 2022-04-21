import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom'
import { getDocs } from 'firebase/firestore'
import {consultaABDCatalogo,filtrar} from '../firebase/functionsFirebase'



export const ItemListContainer = (greeting) => {
  const [libros,setLibros] = useState([])
  const [loading,setLoad] = useState(true)

  const {idCat}= useParams()

  useEffect(()=>{
    toast.info('Cargando catálogo de libros')

    if(idCat === undefined){
      const pedido = getDocs(consultaABDCatalogo())

      pedido
      .then(resultado=>{
        toast.dismiss()

        const catalogoLibros = []

        resultado.docs.forEach(doc=>{
          catalogoLibros.push(doc.data())
        })

        setLibros(catalogoLibros)
      })
      .catch((error)=>{
          toast.dismiss()
          toast.error('Ocurrió un error al cargar el catálogo, intente nuevamente.')
      })
      .finally(()=>{
        setLoad(false)
      })
    }else{
      const pedido = filtrar(consultaABDCatalogo(),'urlcategoria',idCat)

      pedido
      .then(resultado=>{
        toast.dismiss()

        const catalogoLibrosXCat = []

        resultado.docs.forEach(doc=>{
          catalogoLibrosXCat.push(doc.data())
        })

        setLibros(catalogoLibrosXCat)
      })
      .catch((error)=>{
        toast.dismiss()
        toast.error('Ocurrió un error al cargar el catálogo, intente nuevamente.')
      })
      .finally(()=>{
        setLoad(false)
      })
    }
  },[idCat])

  return(
    <>
      {loading ? <div className='carga'><h1>Cargando...</h1></div> : <ItemList libros= {libros}/>}
    </>  
  )
}