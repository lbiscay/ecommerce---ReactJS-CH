import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav>
    <a href="#">Inicio</a>
    <a href="#">Catálogo</a>
    <a href="#">Carrito</a>
    <CartWidget/>
</nav>
  )
}

export default NavBar