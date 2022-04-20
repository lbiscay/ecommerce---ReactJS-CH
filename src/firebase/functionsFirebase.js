import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import { db } from './firebase'



export const consultaABDCatalogo = ()=>{
  return collection(db,'catalogo')
}
  
export const consultaOrdenes =()=>{
  return collection(db,'ordenes')
}

export const filtrar = (colection,key,valor)=>{
  const filtro = query(colection,where(key,'==',valor))
  const pedido = getDocs(filtro)
  return pedido
}




export const nuevaOrden = (datosOrden)=>{
  return addDoc(consultaOrdenes(),datosOrden)
}

