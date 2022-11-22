import React from 'react'
import { View, StyleSheet } from 'react-native';
import { NativeBaseProvider, Container, Button, Text, Box, Image, Center, Input, Toast, Heading, FormControl, Stack} from 'native-base';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native';

const StylishGanG = () => {

    const navigation = useNavigation();

    return ( 
        <NativeBaseProvider>
            <Box  style={globalStyles.contenedor}>
                <View style={[globalStyles.contenido, styles.contenido]}>
                    <Button 
                    style={globalStyles.boton}
                    square
                    block
                    onPress={ () => navigation.navigate('MTienda')}
                    >
                        <Text style={globalStyles.botonTexto}>Comenzar</Text>
                    </Button>
                </View>
            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    contenido: {
      flexDirection: 'column',
      justifyContent: 'center'  
    }
})

 
export default StylishGanG;