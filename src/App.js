import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from "./components/ItemCount"

const App = ()=>{
  return (
    <>      
      <Header/>
      <ItemListContainer  greeting1='Bienvenido!'/>
      <ItemCount stock = {10} inicial = {1}/>
    </>
  )
}

export default App

