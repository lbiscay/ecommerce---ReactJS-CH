import { useEffect, useState } from 'react'
import ItemList from './ItemList'

let librosIniciales = [
  {
    id: 1,
    titulo: 'Charlie y la fábrica de chocolate',
    autor: 'Roald Dahl',
    precio: 1500,
    imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/70/a5/70a5785ffd69daa5be3420a8c9b2847e.jpg'
  },
  {
    id: 2,
    titulo: 'Un mundo feliz',
    autor: 'Aldous Huxley',
    precio: 1200,
    imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c1/8c/c18cdeb80fa6f9a212a1cc5639e94c6d.jpg'
  },
  {
    id: 3,
    titulo: 'El guardian entre el centeno',
    autor: 'J. D. Salinger',
    precio: 1300,
    imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/e5/07/e5075344a9ba4cef36ee52ce04a7818b.jpg'
  }
]

const ItemListContainer = (greeting) => {
  const [libros,setLibros] = useState([])

  useEffect(()=>{
    const pedido = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(librosIniciales)
      },2000)
    })
    .then((data)=>{
      setLibros(data)

    })
    .catch((error)=>{
      console.log('Fallo')
    })
        
  },[])


  return (
    <>
      <h2 id='greeting1'>{greeting.greeting1}</h2>
      <div>
      <ItemList libros= {libros}/>
      </div>
      
    </>
        

  )
}

export default ItemListContainer
