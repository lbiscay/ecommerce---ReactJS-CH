import { useEffect, useState } from 'react'
import ItemList from './ItemList'

export let librosIniciales = [
  {
    id: crypto.randomUUID(),
    titulo: 'Charlie y la fábrica de chocolate',
    autor: 'Roald Dahl',
    sinopsis:'Charlie y la fábrica de chocolate es una novela infantil escrita por el autor inglés Roald Dahl y publicada en 1964. Narra la historia de Charlie Bucket, un niño rodeado de pobreza extrema, cuyo destino cambia al conocer al excéntrico Willy Wonka, dueño de la fábrica de chocolate cercana a su casa.',
    precio: 1500,
    imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/70/a5/70a5785ffd69daa5be3420a8c9b2847e.jpg'
  },
  {
    id: crypto.randomUUID(),
    titulo: 'Un mundo feliz',
    sinopsis:'Un mundo feliz es la novela más famosa del escritor británico Aldous Huxley, publicada por primera vez en 1932. La novela es una distopía que anticipa el desarrollo en tecnología reproductiva, cultivos humanos e hipnopedia, manejo de las emociones por medio de drogas que, combinadas, cambian radicalmente la sociedad.',
    autor: 'Aldous Huxley',
    precio: 1200,
    imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c1/8c/c18cdeb80fa6f9a212a1cc5639e94c6d.jpg'
  },
  {
    id: crypto.randomUUID(),
    titulo: 'El guardián entre el centeno',
    autor: 'J. D. Salinger',
    sinopsis: 'El guardián entre el centeno ​ es una novela del escritor estadounidense J. D. Salinger. Al publicarse en 1951 en los Estados Unidos, la novela provocó numerosas controversias por su lenguaje provocador y por retratar sin tapujos los conflictos en la adolescencia, como el acoso y la sexualidad.​​ The Catcher in the Rye ​ es una novela del escritor estadounidense J. D. Salinger. Al publicarse en 1951 en los Estados Unidos, la novela provocó numerosas controversias por su lenguaje provocador y por retratar sin tapujos los conflictos en la adolescencia, como el acoso y la sexualidad.​​ ',
    precio: 1300,
    imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/e5/07/e5075344a9ba4cef36ee52ce04a7818b.jpg'
  }
]

export const ItemListContainer = (greeting) => {
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
      <h1 id='greeting1'>{greeting.greeting1}</h1>
      <div>
        <ItemList libros= {libros}/>
      </div>
      
    </>
        

  )
}


