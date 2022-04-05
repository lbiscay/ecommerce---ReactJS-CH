import { useLocation, Link } from 'react-router-dom'

export const CheckOut = () => {
  const location = useLocation()
  const {idPedido} = location.state

  return(
  <div className='checkOut'>
    <h2>Gracias por su compra!</h2>
    <h3>Su código de seguimiento es: {idPedido}</h3>
    <Link to='/'><button>Volver al catálogo</button></Link>
  </div>
  )
}
