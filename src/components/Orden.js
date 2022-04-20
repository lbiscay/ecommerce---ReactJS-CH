import { useLocation } from 'react-router-dom'
import {Link } from 'react-router-dom'

export const Orden = (props) => {

  const {state} = useLocation()
  
  const {IDorden, orden, found} = state
  
  return (
    <>
      {found ?
        <div className='itemDetailContainer'>
          <h2 className='ordenDetalle'>ID de órden {IDorden}</h2>
          <div className='ordenDetalle'>
            <h3>Datos del cliente</h3>
            <p>Nombre: {orden.comprador.nombre}</p>
            <p>Teléfono: {orden.comprador.telefono}</p>
            <p>Email: {orden.comprador.mail}</p>
          </div>
          <div className='ordenDetalle'>
            <h3>Items</h3>
            <ul>
              {orden.items.map((item, index) => (
                <li key={index}>
                  <p>{item.titulo}</p>
                  <p>{item.cant} x {item.precio}</p>
                  <p>Total parcial: ${item.cant * item.precio}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='ordenDetalle'>
            <h3>Total: ${orden.total}</h3>
          </div>
        </div>
      :
        <div className='orden-no-encontrada-container'>
          <h3>Regresar al home</h3>
          <Link to='/'>
            <button>Home</button>
          </Link>
          
        </div>
      }
    </>
  )
}
        


