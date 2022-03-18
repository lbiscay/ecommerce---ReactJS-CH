
const ItemDetail = (props) => {
  return (
      <div  className='libroDetalle' key={props.libro.id}>
        <div  className='columna'>
          <img src={props.libro.imagen} width="230" height="360" alt=''></img>
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
          <b> $ {props.libro.precio}</b>
        </div>
      </div>
  )
}


export default ItemDetail