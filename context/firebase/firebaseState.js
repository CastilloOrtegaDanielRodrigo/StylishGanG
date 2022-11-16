import React, { useReducer } from 'react';

import firebase from '../../firebase';
//Se importa un nuevo Hook "useReducer" requiere una funcion o un reducer = "firebaseReducer"
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

//Las props son la colección de datos que un componente recibe del contenedor padre, y que pueden usarse para definir los elementos de React que retornará el componente. 
//En términos prácticos, si un componente necesita recibir información para funcionar, la recibe vía props.
const FirebaseState = props =>{ 
    //console.log(firebase);
    //Crear state inicial
    const initialState = {
        tienda: []
    }

    // useReducer con dispatch para ejecutar las funciones 
    // Este dispatch sirve para llamar cirtas funciones
    const [ state, dispatch ] = useReducer(FirebaseReducer, initialState);

    return ( //Nuestro Provider va estar sobre los "props hijos" (funciones, states y estara disponible a lo largo de las pantallas)
        <FirebaseContext.Provider
            value={{
                tienda: state.tienda,
                firebase
            }}
        
        > 
            {props.children} 
        </FirebaseContext.Provider>


    )
}

export default FirebaseState;