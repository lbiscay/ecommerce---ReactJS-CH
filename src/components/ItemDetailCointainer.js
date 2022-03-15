import { useEffect, useState } from 'react'
import { librosIniciales } from './ItemListContainer'
import ItemDetail from './ItemDetail'


const ItemDetailCointainer = () => {

  const [libro,setLibro] = useState({})

  useEffect(()=>{
    const pedido = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(librosIniciales)
      },2000)
    })
    .then((data)=>{
      let libroAleatorio = data[Math.floor(Math.random() * (data.length))]
      setLibro(libroAleatorio)

    })
    .catch((error)=>{
      console.log('Fallo')
    })
      
  },[])


  return (
    <div>
    <ItemDetail libro= {libro}/>
    </div>
  )
}

export default ItemDetailCointainer