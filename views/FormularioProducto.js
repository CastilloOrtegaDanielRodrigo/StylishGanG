import { ScrollView } from "native-base";
import React from "react";
import { View, StyleSheet, Button, Alert, Text } from "react-native";

const showAlert = () =>
  Alert.alert(
    "Alerta de Compra",
    "¿Deseas continuar con tu compra?",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("¡!COMPRA CANCELADA¡!"),
        style: "cancel",
      },

      {
        text: "Continuar",
        onPress: () => Alert.alert("¡!COMPRA REALIZADA CON EXITO¡!"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const FormularioProducto = () => (
  <View style={styles.container}>
    <Text style={styles.Text}>YA CASI ES TUYO, TERMINA CON TU COMPRA</Text>
    <Button title="COMPRAR" onPress={showAlert} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    
    
  },
  Text: {
    textAlign: 'center',
        marginTop: 40,
        marginBottom: 600,
        fontSize: 40,
  }
});
export default FormularioProducto;