import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Task from "./components/Task"

const TodoList = () => {
    const[task,setTask]=useState();
   // const[completeTask,setCompleteTask]=useState();
    const[taskItems,setTaskItems]=useState([]);

    const handleAddTask=()=>{
        Keyboard.dismiss();
        setTaskItems([...taskItems,task])
        setTask(null);
    }

    const completeTask=(index) =>{
        let itemCopy =[...taskItems];
        itemCopy.splice(index,1);
        setTaskItems(itemCopy);
    }
    
  return (
    <View style={styles.container1}>
        <View style={styles.taskwrapper}>
            <Text style={styles.sectionText}>Today's task</Text>
           <View>
            {
              taskItems.map((item,index) => {
                return (
                    <TouchableOpacity key ={index} onPress={() =>completeTask(index)}>
                             <Task  text={item}/>
                    </TouchableOpacity>
                )
               
            })
            }
            
           </View>
        </View>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "android"? "padding":"height"} 
      style={styles.writeTaskWrapper}>
        <View style={{flexDirection:"row" ,marginTop:30,justifyContent:"space-evenly"}}>
        <TextInput style={{width:200,height:40,borderRadius:10,backgroundColor:"#fff",padding:10}} placeholder="Write Text" value={task}  onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={{width:40,height:40,backgroundColor:"#fff",borderRadius:50}}>
            <Text style={{alignItems:"center",textAlign:"center",margin:8,fontSize:18}}>+</Text>
        </View>
      </TouchableOpacity>
        </View>
        
      </KeyboardAvoidingView>
    </View>
  )
}

export default TodoList;

const styles = StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:"#f2f2f2"
    },
    taskwrapper:{
        paddingTop:80,
        paddingHorizontal:20
    },
    sectionText:{
        fontSize:24,
        fontWeight:"bold"
    },
    items:{
         marginTop:50,
    }
})