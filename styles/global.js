import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#000000',
    },
    contenedorTienda: {
        flex: 1,
    },
    contenido: {
        marginHorizontal: '2.5%',
        flex: 1,
    },
    boton: {
        backgroundColor: '#9E9E9E',
    },
    botonTexto: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000'
    },
    titulo:{
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 20,
    },
    imagen: {
        height: 350,
        width: '100%'
    },
    cantidad:{
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
})

export default globalStyles;