import Header from './components/Header'
import {ItemListContainer} from './components/ItemListContainer'
import ItemDetailCointainer from './components/ItemDetailCointainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Carrito } from './components/Carrito'
import ProviderComponent from './components/CartContext'
import { CheckOut } from './components/CheckOut';


const App = ()=>{
  return (    
    <ProviderComponent>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path= '/' element= {<ItemListContainer/>}/>
          <Route path= '/carrito' element= {<Carrito/>}/>
          <Route path= '/category/:idCat' element= {<ItemListContainer/>}/>
          <Route path= '/item/:idLib' element= {<ItemDetailCointainer/>}/>
          <Route path= '/checkout' element= {<CheckOut/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </ProviderComponent>
       
  )
}

export default App

