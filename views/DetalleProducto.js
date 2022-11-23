import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import{
    NativeBaseProvider,
    Box,
    Footer,
    HStack,
    Button,
    Body,
    Text,
    Heading,
    Card,
    List,
    Flex,
    Image
} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

import PedidoContext from '../context/pedidos/pedidosContext';

const DetalleProducto = () => {
    //Pedido Context
    const { articulo } = useContext(PedidoContext);
    const { nombre, imagen, descripcion, precio } = articulo;

    //Rediccionar
    const navigation = useNavigation();
    return (  
        <NativeBaseProvider>
                <ScrollView>
                    <Box style={globalStyles.contenedorTienda}>
                        <Box style={globalStyles.contenido}>
                            <Heading style={globalStyles.titulo}>{nombre}</Heading>
                            <Card>
                                <List>
                                    <Flex>
                                        <Image style={globalStyles.imagen} source={{ uri: imagen }}/>
                                        <Text style={{marginTop: 20}}>{descripcion}</Text>
                                        <Text style={globalStyles.cantidad} >Precio: $ {precio}</Text>
                                    </Flex>
                                </List>
                            </Card>
                        </Box>
                    </Box>
                            <Button size="sm" colorScheme="secondary"
                            onPress={ () => navigation.navigate("FormularioProducto")}
                            >
                                <Text style={globalStyles.botonTexto}>Ordenar</Text>
                            </Button>
                </ScrollView>
        </NativeBaseProvider>
    );
}
 
export default DetalleProducto;