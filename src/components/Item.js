const Item = (props) => {
  return (
    <li key={props.libro.id}>{props.libro.titulo}</li>
  )
}

export default Item