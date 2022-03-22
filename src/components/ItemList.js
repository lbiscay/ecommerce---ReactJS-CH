import Item from "./Item"


const ItemList = (props) => {
  return (
    <div className='listaProductos'> {props.libros.map((libro)=>{
      return <Item key = {libro.id} libro= {libro}/>
          }
        )
      }
    </div>
  )
}

export default ItemList