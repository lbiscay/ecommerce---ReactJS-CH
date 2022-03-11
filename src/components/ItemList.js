import Item from "./Item"


const ItemList = (props) => {
  return (
    <div>{props.libros.map((libro)=>{
      return <Item libro= {libro}/>
        })}</div>
  )
}

export default ItemList