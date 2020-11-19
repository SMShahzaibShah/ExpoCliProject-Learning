import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from "./components/ButtonComponent";
export default function App() {
  const [getText,setText]= useState('');
  const[getList, setList]=useState([])

  const addItem=()=>{
    console.log(getText)
    setList([...getList, {key: Math.random().toString() ,data:getText}]);
    setText('')
  }
  const removeItem=(itemKey)=>{
    //var list = getList.filter(item=> item.key != itemKey)
    setList(list => getList.filter(item=> item.key != itemKey));
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
        <CustomButton text = "New" color="red"
          onPressEvent={addItem}
        />
      {//<Button title="New" onPress={addItem} />
      }
      </View>  
      
      <View>
        <Text style={{fontSize: 26, color: 'lightgray'}}>{getText}</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {getList.map((item) => 
        <TouchableOpacity 
        key={item.key}
        activeOpacity={0.7}
        
        >
            <View style={styles.scrollViewItem}
              key={item.key}>
              <Text style={styles.scrollViewText}>Data: {item.data}</Text> 
              <TouchableOpacity onPress={()=> removeItem(item.key)}>
                <View style={styles.crossTextContainer} >
                  <Text style={styles.crossScrollViewText}>X</Text>
                </View>
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
          )}
      </ScrollView>

    </View>
    
  );
}

const styles = StyleSheet.create({
  crossTextContainer: {backgroundColor: 'red', borderRadius: 50, padding: 5, width: 30, justifyContent:"center", alignItems: "center"},
  crossScrollViewText:{
    fontSize: 16,
    color:'white',
    fontWeight: "bold"
  }
  ,scrollViewText:{
    fontSize: 22,
    color: 'white'
  },scrollView:{
    width: '80%',
  },
  scrollViewItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"grey",
    alignSelf: "center",
    padding: 10,
    margin:5,
    width: '97%',
    borderRadius: 10,
  },
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
  }
  
});
