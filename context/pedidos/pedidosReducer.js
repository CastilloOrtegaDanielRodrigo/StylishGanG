import {
    SELECCIONAR_PRODUCTO
} from '../../types';

export default (state,action) => { //Esto es un arrow functions
    switch (action.type) {
        case SELECCIONAR_PRODUCTO:
            return {
                ...state,
                articulo: action.payload

            }

        default:
            return state;
    }
}