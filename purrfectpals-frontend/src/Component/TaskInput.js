import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import axios from 'axios';

export default TaskInputField = (props) => {
    // const [task, setTask] = useState();
    const [todo, setTodo] = useState();

    const handleAddTask = (value) => {
        props.addTodo(value);
        // setTodo(null);
        console.log(value)
        const data = {
            todo:value
        };
        axios({
            method: "post",
            data,
            url: "http://192.168.1.4:5000/user/addTask",
        })
        .then((res) => {
            console.log(res)
            })
            .catch((error) => {
              console.log(error)});
        };
        
    return (
        <KeyboardAvoidingView 
        style={styles.container}
      >
        <TextInput style={styles.inputField} value={todo} onChangeText={text => setTodo(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
        <TouchableOpacity onPress={() => handleAddTask(todo)}>
          <View style={styles.button}>
              <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#007180',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 60,
        flex: 1,
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});