import { StyleSheet } from "react-native";  

export const styles = StyleSheet.create ({
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

    icon: {
        color: 'red',
        fontSize: 16,
      },


});