import {StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView, FlatList} from 'react-native';

import { styles } from './styles';
import { useState } from 'react';


export default function App() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [borderColor,setBorderColor] = useState ('#FFEAEC')

  const onHadlerFocus = () =>{
    setBorderColor('#424D9E')
  }
  
  const onHadlerBlur = () =>{
    setBorderColor('#FFEAEC')
  }

  const onHadlerChangeText = (text) => {
    setTask(text)
  }

  const onHadlerCreateTask = () => {
    setTasks([
      ... tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])

    setTask('')
  }
  const renderItem = ({item}) => (
    <View style={styles.containerItem} key={item.id}>
      <Text style={styles.listItem}>{item.value}</Text>
    </View>
  )

  return (

    // safeAreaView es un componente contenedor que solo funciona para ios que da la caracteristica de saber de donde es seguro mostrar el contenido de mi app, es decir que se vea claramente legible el contenio del contenedor 

    // seleccionColor solo sirve para cambiar el color del cursor en ios, para android utilizo cursorColor
    
    //arreglo de estilos con un estilo de objetos(en este caso el styles) y un arreglo en linea que es dinamico (en este caso el borderColor)

    // onFocus es un evento para cambiar de color y onBlur vuelve al color inicial
    <SafeAreaView style={styles.safeArea}>  
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={[styles.input, {borderColor: borderColor}]} 
            placeholder='add new tasks' 
            autoCapitalize='none' 
            autoCorrect={false} 
            selectionColor={'#E3B6F6'}
            placeholderTextColor={'#CCCCCC'}
            onFocus={onHadlerFocus}
            onBlur={onHadlerBlur}
            onChangeText={onHadlerChangeText}
            value={task}
          /> 
           
          <Button disabled={task.length == 0} title='Create'color='#424D9E' onPress={onHadlerCreateTask}/>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          /> 
        </View>
      </View>
   </SafeAreaView> 
  );
}


