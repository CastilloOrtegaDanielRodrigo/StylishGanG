import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
} from 'native-base';
import globalStyles from '../styles/global';
const MTienda = () => {

    //context de firebase
    const { tienda, obtenerProductos } = useContext(FirebaseContext);
    
    useEffect(() => {
        obtenerProductos();

    }, []);
    return (  
        <Text>MTienda</Text>
    );
}
 

export default MTienda;
