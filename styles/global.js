import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#000000',
    },
    contenedorTienda: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginHorizontal: '3%'
    },
    contenido: {
        marginHorizontal: '2.5%',
        flex: 1,
    },
    boton: {
        backgroundColor: '#9E9E9E'
    },
    botonTexto: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
})

export default globalStyles;