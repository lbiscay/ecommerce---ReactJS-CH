import { cartContext } from './CartContext'
import { useContext } from 'react'

export const Carrito = () => {

  const {carrito,total,removerItem,limpiar} = useContext(cartContext)

  

  return (
    <div>
      {carrito.map(libro=>(
        <div key={libro.id}>
          <p>{libro.titulo}</p>
          <p>{libro.cant} x {libro.precio}</p>
          <p>Total parcial: ${libro.cant * libro.precio}</p>
          <button onClick={()=>{removerItem(libro.id)}}>Eliminar producto de carrito</button>
        </div>
        
      ))}
      <div>
        <p>Total: ${total}</p>
        <button onClick={()=>{limpiar()}}>Limpiar carrito</button>
      </div>
    </div>
  )
}


// 