import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const Header = () => {

  return (
    <header>
      <Link to='/'>
        <h1>Libreria virtual</h1>
      </Link>
      <CartWidget/>
      <NavBar/>
        
    </header>
  )
}

export default Header