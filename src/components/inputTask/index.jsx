import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";




const InputTask = ({borderColor, onHadlerFocus, onHadlerBlur, onHadlerChangeText, task, onHadlerCreateTask}) => { 
    return(
        <View style={styles.inputContainer}>
          <TextInput 
            style={[styles.input, {borderColor}]} 
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
    );
};

export default InputTask;