import { Link } from "react-router-dom"
import { cartContext } from './CartContext'
import { useContext } from "react"

const CartWidget = () => {

  const {cantidad} = useContext(cartContext)

  if(cantidad > 0){
    return (
      <Link to='carrito'>
        <span className="material-icons">
          shopping_basket
        </span>
        {cantidad}
      </Link>
    )
  }else{
    return (null)
  }
}

export default CartWidget