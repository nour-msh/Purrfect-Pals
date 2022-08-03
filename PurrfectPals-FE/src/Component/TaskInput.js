import React, {useState} from 'react';
import { KeyboardAvoidingView, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default TaskInputField = (props) => {


    return (
        <KeyboardAvoidingView 
        style={styles.container}>
        <TextInput style={styles.inputField} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
        <TouchableOpacity>
          <View style={styles.button}>
              <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}
