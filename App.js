import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput,Keyboard, TouchableOpacity, View } from 'react-native';
import CustomButton from "./components/ButtonComponent";
import {hardcoreTodoItems} from "./constant/DummyData";
export default function App() {
  const [getText,setText]= useState('');
  const[getList, setList]=useState(hardcoreTodoItems);
  const[editingItem, seteditingItem]=useState(0);

  

  const addItem=()=>{
    console.log(getText)
    setList([...getList, {key: Math.random().toString() ,data:getText}]);
    setText('')
    Keyboard.dismiss();
  }
  const updateItem=()=>{
    setList(list => getList.map(item=> 
      item.key === editingItem ?
        {key: item.key, data: getText}
      : item
      ));
      setText('')
      seteditingItem(0)
      Keyboard.dismiss();
    }
  const removeItem=(itemKey)=>{
    //var list = getList.filter(item=> item.key != itemKey)
    setList(list => getList.filter(item=> item.key != itemKey));
  }
  const editItem=(item)=>{
    setText(item.data)
    seteditingItem(item.key)
  }

  const scrolView=(
    <ScrollView style={styles.scrollView}>
    {getList.map((item, index) => 
    <TouchableOpacity 
    key={item.key}
    activeOpacity={0.7}
    onPress={()=>editItem(item)}
    >
        <View style={styles.scrollViewItem}
          key={item.key}>
          <Text style={styles.scrollViewText}>{index+1}#: {item.data}</Text> 
          <TouchableOpacity onPress={()=> removeItem(item.key)}>
            <View style={styles.crossTextContainer} >
              <Text style={styles.crossScrollViewText}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
      )}
  </ScrollView>
  );

  const emptyScroolView=(
    <View>
    <Text style={{fontStyle:"italic", fontSize: 16, color:'grey' }}>TodoList Empty</Text>
    </View>
  );

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
        <CustomButton 
        text = {editingItem === 0 ? "Add" : "Update"} 
        color={editingItem === 0 ? "red" : "green"}
          onPressEvent={editingItem === 0 ? addItem : updateItem}
          disabled={getText.length <= 0}
        />
      {//<Button title="New" onPress={addItem} />
      }
      </View>  
      <View>
        <Text style={{fontSize: 26, color: 'lightgray'}}>{getText}</Text>
      </View>
      {getList.length<= 0 ? emptyScroolView : scrolView}  
    
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
