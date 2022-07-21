import { StyleSheet,Text,View,Modal,TextInput,Pressable,TouchableOpacity} from "react-native";
import axios from "axios";
import {useState} from 'react';

function ProfBox(props){
    const [isVisible, setVisible] = useState(false);
    const handleModalVisibility = () => setVisible(() => !isVisible);

    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmitPost = () => {
        const data = {
          duration: duration,
          description: description,
        };
        axios({
          method: "POST",
          data,
          url: "http://192.168.1.4:5000/user/addPost",
        })
          .then((res) => {
              console.log(res);
              setVisible(false);
          }
          )
          .catch((error) => console.log(error));
      };


      const handleDurationChange = (value) => {
        setDuration(value)
      }

      const handleDescriptionChange = (value) => {
        setDescription(value)
      }

    return(
        <View style={styles.profBox}>
            <TouchableOpacity style={styles.addPet}>
                <Text style={styles.add} onPress={handleModalVisibility}>+</Text>
            </TouchableOpacity>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.petType}>{props.petType}</Text>

            <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
            setVisible(!isVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    
                    <View>
                        <TextInput style={styles.modalText} placeholder='Add duration'
                        value={duration} onChangeText={handleDurationChange}>
                        </TextInput>
                        <TextInput style={styles.modalText} placeholder='Add description'
                        value={description} onChangeText={handleDescriptionChange}

                        ></TextInput>
                    </View>
                    <Pressable
                    style={styles.savebutton} onPress={handleSubmitPost}
                    >
                    <Text style={styles.saveText} >Save</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>
        </View>
    )
}

const styles=StyleSheet.create({
    profBox:{
        width:'80%',
        height:120,
        backgroundColor:'white',
        borderRadius:30,
        position:'absolute',
        bottom:0,
        alignSelf:'center',
    },
    addPet:{
        width:'15%',
        height:'40%',
        backgroundColor:'#FF914A',
        borderRadius:30,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        Top:0,
        right:-25
    },
    add:{
        fontSize:30,
        color:'white',
        fontWeight:"700",
        textAlign:'center',
    },
    name:{
        padding:10,
        textAlign:'center',
        fontWeight:'600',
        fontSize:24,
        fontWeight:'600'
    },
    petType:{
        fontSize:14,
        color:'grey',
        textAlign:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      savebutton:{
        backgroundColor:'transparent',
      },
      saveText:{
        color:'#FF914A',
        textDecorationLine: 'underline'
      },
      modalText: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center"
      }
})

export default ProfBox
