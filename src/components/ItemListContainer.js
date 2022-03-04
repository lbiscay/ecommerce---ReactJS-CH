import ItemCount from "./ItemCount"

const ItemListContainer = (greeting) => {
  return (
    <>
    <h2 id='greeting1'>{greeting.greeting1}</h2>
    <ItemCount stock = {10} inicial = {1}/>
    </>
        

  )
}

export default ItemListContainer