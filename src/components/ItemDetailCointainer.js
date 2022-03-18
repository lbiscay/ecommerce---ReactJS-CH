import { useEffect, useState } from 'react'
import { librosIniciales } from './ItemListContainer'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailCointainer = () => {

  const [libro,setLibro] = useState({})
  const {idLib} = useParams()

  useEffect(()=>{
    const pedido = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(librosIniciales)
      },2000)
    })
    .then((data)=>{
      let libroxID = data.filter(n=>
         n.id === idLib
      )
      
      setLibro(libroxID[0])
      
    })
    .catch((error)=>{
      console.log('Fallo')
    })
      
  },[idLib])


  return (
    <div>
      <ItemDetail libro= {libro}/>
    </div>
  )
}

export default ItemDetailCointainer