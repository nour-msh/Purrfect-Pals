import React,{useState} from 'react';
import { View, StyleSheet,Keyboard,ScrollView,Image, Text } from 'react-native';
import TaskBox from '../Component/TaskBox';
import TaskInput from '../Component/TaskInput';

export default function Todo() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
      }
    
      const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
      }
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>MY PET'S TODO LIST</Text>
        <Image source={require("../../assets/kitty.png")}
        style={styles.kitty}
        />
        <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskBox index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInput addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: '#FF914A',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 20,
    textAlign:"center"
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  kitty:{
    height:200,
    width:200,
    alignSelf:"center",
    top:200,
    opacity:0.3,
    position:"absolute"
 }
});