import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    NativeBaseProvider,
    Box,
    Text, 
    Container,
    List,
    Card,
    FlatList,
    Stack,
    HStack,
    VStack,
    ScrollView,
    Flex,
    Divider,
    Badge,
    Center,
    Image} from 'native-base';
import globalStyles from '../styles/global';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';

const MTienda = () => {

    //context de firebase
    const { tienda, obtenerProductos } = useContext(FirebaseContext); //GRACIAS A ESTAS LLAVES PODEMOS IR EXTRAYENDO LO QUE QUERAMOS

    //Context de pedido
    const { seleccionarArticulo } = useContext(PedidoContext);

    //hOOK PARA REDICCIONAR
    const navigation = useNavigation();

    useEffect(() => {
        obtenerProductos();
        console.log(tienda);
    }, []);

    const mostrarHeading = (categoria, i) => {
        
        if (i > 0) {
            const categoriaAnterior = tienda [i-1].categoria;
            if(categoriaAnterior !== categoria){
                return(
                    <Badge colorScheme="info">
                        <Text>{categoria.toUpperCase()}</Text>
                    </Badge>
                )
            }
           
        } else {
            return(
                <Badge colorScheme="info">
                    <Text>{categoria.toUpperCase()}</Text>
                </Badge>
            )
        }
    }

    return ( 
        <NativeBaseProvider>
            
            <ScrollView w={["500", "300"]} h="80">
                <Container style={globalStyles.contenedorTienda}>
                    <Box style={{ blackgroundColor: '#FFF'}}>
                        
                        <List>
                            {tienda.map( (articulo, i) => {
                            const {imagen, nombre, descripcion, categoria, precio, id} = articulo;

                       return (
                        <Fragment key={id}>
                            {mostrarHeading(categoria, i ) }
                            <TouchableOpacity
                            onPress= { () =>{
                                //ELIMINAR ALGUNAS PROPIEDADES DEL ARTICULO
                                const { existencia, ...articulo2 } = articulo;
                                seleccionarArticulo(articulo2);
                                navigation.navigate("DetalleProducto");
                            }}
                            
                            >
                                <List>
                                    <HStack>
                                        <Image source={{ uri: imagen }} alt="Alternate Text" size="xl" />
                                        

                                        <Flex>
                                            <Text>Nombre: {nombre} </Text>
                                            <Text
                                                note
                                            >Descripcion: {descripcion}</Text>

                                            <Text>Precio: $ {precio} </Text>
                                        </Flex>

                                    </HStack>
                                </List>
                            </TouchableOpacity>
                        </Fragment>
                       )
                    })}
                    
                </List>
                
               </Box>

            </Container>
            </ScrollView>
            </NativeBaseProvider>
            
        
    );
}
 

export default MTienda;
