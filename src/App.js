import Header from './components/Header'
import {ItemListContainer} from './components/ItemListContainer'
import ItemDetailCointainer from './components/ItemDetailCointainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Carrito } from './components/Carrito'

const App = ()=>{
  return (    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path= '/' element= {<ItemListContainer  greeting1='Bienvenido!'/>}/>
        <Route path= '/carrito' element= {<Carrito/>}/>
        <Route path= '/category/:idCat' element= {<ItemListContainer  greeting1='Bienvenido!'/>}/>
        <Route path= '/item/:idLib' element= {<ItemDetailCointainer/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>   
  )
}

export default App

