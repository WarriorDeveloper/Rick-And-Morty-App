import {AGREGAR_FAVORITO,ELIMINAR_FAVORITO, FILTER, ORDER} from './actions-types'

export const agregarFavorito = (char)=>{
    return {type: AGREGAR_FAVORITO, payload : char}
}

export const eliminarFavorito = (id)=>{
    return {type: ELIMINAR_FAVORITO, payload: id}
}

//-----------------------------------------------------
export const filterCards = (status)=>{
    return {type: FILTER, payload: status}
}

export const orderCards = (id)=>{
    return {type: ORDER, payload: id}
}