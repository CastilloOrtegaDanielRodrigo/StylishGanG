import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import {
    NativeBaseProvider,
    Box,
    Text, 
    Container, 
    Separator,
    List,
    Left,
    FlatList,
    Stack,
    VStack,
    ScrollView,
    Flex,
    Divider,
    Center,
    Image} from 'native-base';
import globalStyles from '../styles/global';

const MTienda = () => {

    //context de firebase
    const { tienda, obtenerProductos } = useContext(FirebaseContext);
    
    useEffect(() => {
        obtenerProductos();
        console.log(tienda);
    }, []);
    return ( 
        <NativeBaseProvider>
            <ScrollView w={["1000", "1100"]} h="80">
                <Container style={globalStyles.contenedorTienda}>
                    <Box style={{ blackgroundColor: '#FFF'}}>
                        <List>
                            {tienda.map( articulo => {
                            const {imagen, nombre, descripcion, categoria, precio, id} = articulo;

                       return (
                        <Fragment key={id}>
                            <List space="2"
                            >
                                <Center>
                                <Image size="200"  source={{ uri: imagen }} />
                                </Center>
                                <VStack  space={4}>
                                    <Text>{nombre} </Text>
                                    <Text
                                        note
                                    >{descripcion}</Text>

                                    <Text>Precio: $ {precio} </Text>
                                </VStack>

                            </List>
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
