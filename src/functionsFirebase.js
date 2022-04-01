import { getDocs, collection,query,where } from 'firebase/firestore'
import { db} from './firebase'


export const consultaABDCatalogo = ()=>{
    return collection(db,'catalogo')
  }
  
  export const filtrar = (key,valor)=>{
    const filtro = query(consultaABDCatalogo(),where(key,'==',valor))
    const pedido = getDocs(filtro)
    return pedido
  }