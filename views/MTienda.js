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
    Thumbnail,
    ScrollView,
    SectionList,
    VStack,
    Flex,
    Divider,
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
                            <VStack space="2"
                            >
                                
                                    <Image size="12" source={{ uri: imagen }} alt="react-native" />
                                
                                <Flex>
                                    <Text>{nombre} </Text>
                                    <Text
                                        
                                        
                                    >{descripcion}</Text>

                                    <Text>Precio: $ {precio} </Text>
                                </Flex>

                            </VStack>
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
