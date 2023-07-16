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
    },

    listContainer: {
        
        marginTop:25,
        
    },

    containerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#E3B6F6',
        paddingHorizontal:10,
        borderRadius: 10,
        color: '#212121',
        shadowColor: "#000", //sombra en la lista.  
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        marginBottom: 15,
        elevation: 3,

    },
    listItem: {
        fontSize: 15,
        fontWeight : 'bold',
        color: '#212121',
    },

    list: {
      
      gap: 15,// gap sirve para que la linea de la lista tome todo el tamano de la pantalla
      paddingBottom: 20,
    },
    icon: {
      color: 'red',
      fontSize: 16,
    },

    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
      paddingVertical: 20,
    }, 
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalDetailContainer: {
      paddingVertical: 20,
    },
    modalDetailMessage: {
      fontSize: 14,
      color: '#212121',
    },
    selectedTask: {
      fontSize: 14,
      color: '#212121',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 10,
    },
    modalButtonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      marginHorizontal: 20, 
    },


  });