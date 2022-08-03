import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default TaskItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
   
});