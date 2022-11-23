import React from 'react'
import { StyleSheet } from 'react-native';
import{
    NativeBaseProvider,
    Text,
    Box,
    FormControl,
    ScrollView,
    Grid,
    List,
    HStack,
    Icon,
    VStack,
    Divider,
    Center
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';
const FormularioProducto = () => {
    return (  
        <NativeBaseProvider>
            <ScrollView>
            <Box>
                <Box>
                    <FormControl>
                        <Text style={globalStyles.titulo}>Cantidad</Text>
                            <HStack space={7} h="40" w="20">
                            <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3} />
                            <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
                            <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
                            </HStack>;
                    </FormControl>
                </Box>
            </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}
 
export default FormularioProducto;