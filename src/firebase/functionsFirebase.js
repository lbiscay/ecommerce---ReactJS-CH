import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import { db} from './firebase'


export const consultaABDCatalogo = ()=>{
  return collection(db,'catalogo')
}
  
export const filtrar = (key,valor)=>{
  const filtro = query(consultaABDCatalogo(),where(key,'==',valor))
  const pedido = getDocs(filtro)
  return pedido
}

const consultaOrdenes =()=>{
  return collection(db,'ordenes')
}

export const pedido = (datosOrden)=>{
  return addDoc(consultaOrdenes(),datosOrden)
}

