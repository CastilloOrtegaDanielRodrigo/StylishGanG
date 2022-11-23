import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetalleProducto from './views/DetalleProducto';
import FormularioProducto from './views/FormularioProducto';
import MTienda from './views/MTienda';
import StylishGanG from './views/StylishGanG';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido';

//importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <FirebaseState>
      <PedidoState>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: '#404040'
            },
            headerTitleStyle: {
              fontWeigt: 'bold',
              color: 'white'
            }
          }}
        >
          <Stack.Screen
            name="StylishGanG"
            component={StylishGanG}
            options={{
              title: "StylishGanG"
            }}
          />

          <Stack.Screen
            name="MTienda"
            component={MTienda}
            options={{
              title: "Tienda"
            }}
          />

          <Stack.Screen
            name="DetalleProducto"
            component={DetalleProducto}
            options={{
              title: "Detalle Producto"
            }}
          />

          <Stack.Screen
            name="FormularioProducto"
            component={FormularioProducto}
            options={{
              title: "Ordena tu Producto"
            }}
          />

          <Stack.Screen
            name="ProgresoPedido"
            component={ProgresoPedido}
            options={{
              title: "Resumen Pedido"
            }}
          />

          <Stack.Screen
            name="ResumenPedido"
            component={ResumenPedido}
            options={{
              title: "Progreso de Pedido"
            }}
          />
          </Stack.Navigator>
        </NavigationContainer>
      </PedidoState>
    </FirebaseState>
    </>
  );
};



export default App;
