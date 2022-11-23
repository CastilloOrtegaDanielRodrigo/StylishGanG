import React, { useReducer } from 'react';

import firebase from '../../firebase';
//Se importa un nuevo Hook "useReducer" requiere una funcion o un reducer = "firebaseReducer"
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import {OBTENER_PRODUCTOS_EXITO} from '../../types';

import _ from 'lodash';

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
    //EL dispatch SIRVE PARA LLAMAR CIERTAS FUNCIONES

        // fUNCION QUE SE EJECUTA PARA TRAER LO PRODUSCTOS
        const obtenerProductos = () => {
        console.log('desde firebaseState')

            //consultar firebase
            firebase.db
                .collection('productos')
                .where('existencia', '==', true) //solo trarer los productos que esten en existencia
                .onSnapshot(manejarSnapshot); // sirve para utilizar la base de datos en tiempo real
            
                function manejarSnapshot(snapshot) {
                let articulos = snapshot.docs.map( doc => { //docs es la forma de como acceder a todos ls documentos de la db
                    return{
                        id: doc.id,
                        ...doc.data() //data es el que tiene toda la infotmacion en firebase
                    }
                });
                //ORDENAR POR CATEGORIA LODASH
                articulos = _.sortBy(articulos, 'categoria');
                //console.log(articulos)
                
                //TENER RESULTADOS DE LA BASE DE DATOS
                dispatch({
                    type: OBTENER_PRODUCTOS_EXITO,
                    payload: articulos
                });
                console.log(articulos);
            }
        }
    return ( //Nuestro Provider va estar sobre los "props hijos" (funciones, states y estara disponible a lo largo de las pantallas)
        <FirebaseContext.Provider
            value={{
                tienda: state.tienda,
                firebase,
                obtenerProductos
            }}
        
        > 
            {props.children} 
        </FirebaseContext.Provider>


    )
}

export default FirebaseState;