import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
        
        <Text style={{fontSize:18,fontWeight:"800"}}>{props.text}</Text>
       
       
       
       
    </View>
  )
}

export default Task;

const styles = StyleSheet.create({
    item:{
        height:40,
        width:300,
        backgroundColor:"#ff666f",
       justifyContent:"center",
       alignItems:"center",
        borderRadius:10,
        marginTop:10

    },
    square:{
        width:24,
        height:24,
        opacity:24,
        backgroundColor:"#fcbc05"
    },
    itemleft:{
backgroundColor:"#fff"
    },
    button:{
        backgroundColor:"#fff000",
        height:50
    }
    ,
    itemtext:{

    },
    circular:{

    },
})