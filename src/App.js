import Header from './components/Header'
import {ItemListContainer} from './components/ItemListContainer'
import ItemCount from "./components/ItemCount"
import ItemDetailCointainer from './components/ItemDetailCointainer'

const App = ()=>{
  return (
    <>      
      <Header/>
      <ItemListContainer  greeting1='Bienvenido!'/>
      <ItemDetailCointainer/>
      <ItemCount stock = {10} inicial = {1}/>
    </>
  )
}

export default App

