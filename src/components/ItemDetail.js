import ItemCount from "./ItemCount"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { cartContext } from './CartContext'
import { useContext } from 'react'

const ItemDetail = (props) => {
  const [stock,setStock] = useState(10)
  const [cantidad,setCantidad] = useState(0)

  const {agregarItem} = useContext(cartContext)

  const onAdd = (cant)=>{
    setCantidad(cant)
    setStock(stock-cant)
  }


  return (
    <>
      <div  className='libroDetalle' key={props.libro.id}>
        <div  className='columna1'>
          <img src={props.libro.imagen} width="230" height="360" alt=''></img>
          <br></br>
          <ItemCount stock = {stock} inicial = {1} onAdd={onAdd}/>
        </div>
        <div  className='columna'>
          <p>  <b>ID:</b> {props.libro.id}</p>
          <p>  <b>Título:</b> {props.libro.titulo}</p>
          <p>  <b>Autor:</b> {props.libro.autor}</p>
          <p>  <b>Categoría:</b> {props.libro.categoria}</p>
          <br></br>
          <p>  <b>Sinopsis:</b> </p>
          <p>{props.libro.sinopsis}</p>
          <br></br>
          <h3><b> $ {props.libro.precio}</b></h3>
        </div>
      </div>
      <NavLink to="/carrito" onClick={()=>{agregarItem(props.libro,cantidad)}}><button>Agregar a carrito</button></NavLink>
      
    </>
  )
}


export default ItemDetail