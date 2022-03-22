import { Link } from "react-router-dom"

const Item = (props) => {
  return (
    <div  className='libro' key={props.libro.id}>
      <h3>{props.libro.titulo}</h3>
      <p>  <b>Autor:</b> {props.libro.autor}</p>
      <img src={props.libro.imagen} width="230" height="360" alt=''></img>
      <br></br>
      <h3><b> $ {props.libro.precio}</b></h3>
      <br></br>
      <p><Link to={`/item/${props.libro.id}`}>Ver detalles</Link></p>
    </div>
  )
}

export default Item


