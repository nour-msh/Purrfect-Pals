import React,{useState} from 'react';
import { View, StyleSheet,Keyboard,ScrollView, Text } from 'react-native';
import TaskBox from '../Component/TaskBox';
import TaskInput from '../Component/TaskInput';

export default function Todo() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
      }
    
    
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
        <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskBox index={index + 1} task={task}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});