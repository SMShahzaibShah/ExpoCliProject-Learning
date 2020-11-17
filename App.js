import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [getText,setText]= useState('');
  const[getList, setList]=useState(['item 1','item 2'])

  const addItem=()=>{
    console.log(getText)
    setList([...getList, getText]);
    setText('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo List</Text>
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder="Enter an Item"
        onChangeText={text=> setText(text)}
        value={getText}
        />
      <Button title="New" onPress={addItem} />
      </View>  
      
      <View>
        <Text style={{fontSize: 26, color: 'lightgray'}}>{getText}</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 26}}> {getList.map((item) => 
          <View style={styles.scrollViewItem}>
        <Text>{item}</Text>
    </View> )}
        </Text>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
   paddingTop: 40,
  },
  inputContainer:{
    flexDirection: "row",
    width: '75%',
    justifyContent: "space-between",
    alignItems: "flex-end"

  },
  textInput:{
    borderColor: "red",
    //borderWidth: 2,
    borderBottomWidth: 2,
    width: '78%',
    //borderRadius: 50,
    fontSize: 16,
    padding: 10,
  },
  text:{
    fontSize: 32,
    color: 'darkgrey',
  },
  scrollViewItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"grey",
    alignSelf: "center",
    padding: 10,
    margin:5,
    width: '70%',
    borderRadius: 10,
  },
  scrollView:{
    width: '100%',
  }
});
