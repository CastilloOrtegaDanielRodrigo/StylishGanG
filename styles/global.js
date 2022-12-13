import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#000000',
    },
    contenedorCompra: {
        flex: 1,
        backgroundColor: '#00FF00',
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
    botonTextoCompra: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000',
        alignItems: 'center',
        textAlign: 'center'
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
    compra: {
        marginVertical: 20,
        textAlign: 'center',
         
    },
    botonCompra: {
        backgroundColor: '#9E9E9E'
        
    },

    fondo: {
        backgroundColor: '#00FF00',
    }
})

export default globalStyles;