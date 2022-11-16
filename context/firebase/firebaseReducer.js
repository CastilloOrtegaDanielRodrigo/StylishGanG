import {OBTENER_PRODUCTOS_EXITO} from '../../types'

export default (state,action) => { //Esto es un arrow functions
    switch (action.type){
        case OBTENER_PRODUCTOS_EXITO:
            return {
                ...state,
                tienda: action.payload //EL dispatch es el action
            }
        default:
            return state;
    }
}