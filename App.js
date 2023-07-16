import {StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView} from 'react-native';

import { styles } from './styles';

export default function App() {
  return (

    // safeAreaView es un componente contenedor que solo funciona para ios que da la caracteristica de saber de donde es seguro mostrar el contenido de mi app, es decir que se vea claramente legible el contenio del contenedor 


    <SafeAreaView style={styles.safeArea}>  
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='add new tasks'/>
          <Button title='Create'color='#424D9E'/>
        </View>
      </View>
   </SafeAreaView> 
  );
}


