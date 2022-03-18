import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to='carrito'>
      <span className="material-icons">
        shopping_basket
      </span>
    </Link>
    
  )
}

export default CartWidget