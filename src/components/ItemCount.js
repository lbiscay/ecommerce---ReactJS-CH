import { useState } from "react"

export const ItemCount = ({stock,inicial, onAdd}) => {
  const [estado,setEstado] = useState(inicial)

  const sumar = ()=>{
    setEstado(estado+1)
  }

  const restar = ()=>{
      if(estado > 0){
        setEstado(estado-1)
      }
  }

  const agregar = ()=>{
    if(estado>stock){
      alert('No hay items suficientes en stock, intente con una cantidad menor.')
    }else{
      onAdd(estado)
    }
    
    
  }

  return (
    <div className='itemCount'>
      <p>{estado} (Cantidad disponible:{stock})</p>
      <button onClick={restar}>Restar</button>
      <button onClick={sumar}>Sumar</button>
      <button onClick={agregar}>Confirmar cantidad</button>
    </div>
      
    
  )
}

export default ItemCount