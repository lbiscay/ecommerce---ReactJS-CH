import { Link } from "react-router-dom"

const Item = (props) => {
  return (
    <div  className='libro' key={props.libro.id}>
      <p>  <b>Título:</b> {props.libro.titulo}</p>
      <p>  <b>Autor:</b> {props.libro.autor}</p>
      <img src={props.libro.imagen} width="230" height="360" alt=''></img>
      <br></br>
      <b> $ {props.libro.precio}</b>
      <br></br>
      <Link to={`/item/${props.libro.id}`}>Ver detalles</Link>
    </div>
  )
}

export default Item


