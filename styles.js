import { StyleSheet, StatusBar } from "react-native";

// manera de crear el import de forma rapida es posicionarse sobre el componente a importar y seleccionra ctrl+espacio

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {   
      flex: 1,// quiere decir que ocupa toda la pantalla
      backgroundColor: '#fff',
      marginHorizontal: 20,
      paddingTop: StatusBar.currentHeight, // el StatusBar solo existe para android, en ios la altura es 0(es el espacio por debajo de la hora y marcador de bateria del movil)
      
    },
  
    inputContainer : {
      flexDirection: 'row',
      justifyContent: 'space-between'
      
    },
    input: {
      flex: 0.95,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10, // separa el texto del borde que se encuentra dentro del input
      color: 'blue',
      height: 40,
      fontSize: 14,  
    }
  });