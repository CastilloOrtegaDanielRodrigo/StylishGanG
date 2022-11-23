import React, { useReducer } from 'react';

import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

import {
    SELECCIONAR_PRODUCTO
} from '../../types';

//Las props son la colección de datos que un componente recibe del contenedor padre, y que pueden usarse para definir los elementos de React que retornará el componente. 
//En términos prácticos, si un componente necesita recibir información para funcionar, la recibe vía props.
const PedidoState = props =>{ 

    const initialState = {
        pedido: [],
        articulo: null
    }

    // useReducer con dispatch para ejecutar las funciones 
    // Este dispatch sirve para llamar cirtas funciones
    const [ state, dispatch ] = useReducer(PedidoReducer, initialState);

    //SELECCIONA EL PRODUCTO QUE EL USUARIO DESEA ORDENAR
    const seleccionarArticulo = articulo =>{
       
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: articulo
        })
    }

    return ( //Nuestro Provider va estar sobre los "props hijos" (funciones, states y estara disponible a lo largo de las pantallas)
        <PedidoContext.Provider
            value={{
                pedido: state.pedido,
                articulo: state.articulo,
                seleccionarArticulo
            }}
        
        > 
            {props.children} 
        </PedidoContext.Provider>


    )
}

export default PedidoState;