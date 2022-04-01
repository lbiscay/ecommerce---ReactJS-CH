import { Link } from "react-router-dom"
import { cartContext } from './CartContext'
import { useContext } from "react"

const CartWidget = () => {

  const {cantidad} = useContext(cartContext)

  return(
    <>
      {cantidad > 0
      ? 
        <Link to='carrito'>
          <span className="material-icons">
          shopping_basket
          </span>
          {cantidad}
        </Link>
      :
        (null)
      }
    </>
  )
}

export default CartWidget