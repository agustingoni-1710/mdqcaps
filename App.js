import { StyleSheet,Text, View, TextInput, Button, StatusBar,SafeAreaView, SafeAreaViewBase} from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='add new tasks'/>
          <button title='Create' color='#424D9E'/>
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight
  },

  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    flex: 0.95,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'red',
    borderColor: '#424D9E',
    fontSize: 14,  
  }
});
