import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;

const ProviderComponent = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  const agregarItem = (item, cant) => {
    let copia = carrito.slice(0)
    if(estaEnCarrito(item.id)){
        copia.map((n)=>{
            if(n.id !== item.id){
                return n
            }else{
                return n.cant += cant
            }
        })
      }else{
        copia.push(
            {
                id:item.id,
                titulo:item.titulo,
                precio:item.precio,
                cant
            })
      }
    setTotal(total+item.precio*cant)
    setCantidad(cantidad+cant)
    setCarrito(copia)
  };

  const removerItem = (id) => {
    let copia = carrito.slice(0)
    let nuevoCarrito = copia.filter((producto) => producto.id !== id)

    setCarrito(nuevoCarrito)
    
    let cantidadTotal = 0
    let suma = 0

    nuevoCarrito.forEach(e => {
      suma = suma + e.precio * e.cant
      cantidadTotal = cantidadTotal + e.cant
    });

    setTotal(suma)
    
    setCantidad(cantidadTotal)

  };

  const limpiar = () => {
    setCarrito([]);
    setTotal(0)
    setCantidad(0)
  };

  const estaEnCarrito = (id) => {
    return carrito.some((n) => n.id === id);
  };

  const valorDeContexto = {
    carrito,
    cantidad,
    total,
    agregarItem,
    removerItem,
    limpiar,
    estaEnCarrito,
  };

  return <Provider value={valorDeContexto}>{children}</Provider>;
};

export default ProviderComponent;
