import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export default styles;