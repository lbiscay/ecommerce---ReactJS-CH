import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/category/fantastico">Fantástico</NavLink>
      <NavLink to="/category/cienciaficcion">Ciencia ficción</NavLink>
      <NavLink to="/category/realismo">Realismo</NavLink>
      <CartWidget/>
    </nav>
  )
}

export default NavBar