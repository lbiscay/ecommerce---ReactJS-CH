const Item = (props) => {
  return (
    <>
    <div  className='libro' key={props.libro.id}>
      <h4> ID: {props.libro.id}</h4>
      <p>  <b>Título:</b> {props.libro.titulo}</p>
      <p>  <b>Autor:</b> {props.libro.autor}</p>
      <b> $ {props.libro.precio}</b>
      <br></br>
      <img src={props.libro.imagen} width="230" height="360" alt=''></img>
    </div>
    </>
  )
}

export default Item


