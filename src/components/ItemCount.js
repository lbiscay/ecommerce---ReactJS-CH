import { useState } from "react"

export const ItemCount = ({stock,inicial}) => {
  const [estado,setEstado] = useState(inicial)
  const sumar = ()=>{
    if(estado < stock){
      setEstado(estado+1)
    }
  }

  const restar = ()=>{
    if(estado > inicial){
      setEstado(estado-1)
    }
  }
  const onAdd = ()=>{
    console.log('La cantidad de items es ',estado)
    setEstado(inicial)
  }
  return (
    <>
      <p>Libros (10 en stock) </p>
      <p>{estado}</p>
      <button onClick={restar}>Restar</button>
      <button onClick={sumar}>Sumar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount