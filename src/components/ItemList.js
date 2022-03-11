import Item from "./Item"


const ItemList = (props) => {
  return (
    <ul>{props.libros.map((libro)=>{
      return <Item libro= {libro}/>
        })}</ul>
  )
}

export default ItemList