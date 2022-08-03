import {View,Text,StyleSheet, Image,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import axios from 'axios';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useContext } from "react";
import { UserContext } from "../../App";
import { TextInput } from 'react-native-gesture-handler';



function VetProfile({navigation}){
    const [vetEmail, setVetEmail] = useState('')
    const [vetNumber, setVetNumber] = useState('');
    const [vetSpecialty, setVetSpecialty] = useState('');
    const [vetStory, setVetStory] = useState('');
  const [image, setImage] = useState(userImage);

  const { userId, userToken, userFullName, userImage } =useContext(UserContext);

    const handleSubmitPortfolio = () => {
        const data = {
            vet_email:vetEmail,
            vet_number:vetNumber,
            vet_image:image,
            vet_specialty:vetSpecialty,
            vet_story:vetStory,
            user_id:userId
        };
        axios({
          method: "POST",
          data,
          url: `http://192.168.1.4:5000/user/addPortfolio`,
        })
          .then((res) => {
              console.log(res);
              
          }
          )
          .catch((error) => console.log(error));
      };

      const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
      console.warn("you clicked me")  
      }
    }

      const handleEmailChange = (value) => {
        setVetEmail(value)
      }

      const handleNumberChange = (value) => {
        setVetNumber(value)
      }
      const handleSpecialtyChange = (value) => {
        setVetSpecialty(value)
      }
      const handleStoryChange = (value) => {
        setVetStory(value)
      }
    return(
        <View style={styles.container}>
                <KeyboardAvoidingView>
                    <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.profContainer}>
                <Image source={{uri: image}}
                style={styles.vetPhoto}/>
            </View>
            <View style={styles.help}>
      <Ionicons name="add" size={24} onPress={pickImage} color="#FF914A" style={styles.addImage}/>
                <Text style={styles.drName} >Dr. {userFullName}</Text>
                <TextInput placeholder='My Email' style={styles.input}
                value={vetEmail}
                onChangeText={handleEmailChange}
                ></TextInput>
                <TextInput placeholder='My Phone Number' style={styles.input}
                value={vetNumber}
                onChangeText={handleNumberChange}
                ></TextInput>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.about}>My specialty:</Text>
            <TextInput style={styles.about}
            value={vetSpecialty}
            onChangeText={handleSpecialtyChange}
            ></TextInput>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.about}>My success story:</Text>
            <TextInput style={styles.about}
            value={vetStory}
            onChangeText={handleStoryChange}
            ></TextInput>
            </View>
            <TouchableOpacity style={styles.save} onPress={handleSubmitPortfolio}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}


const styles=StyleSheet.create({
    profContainer:{
        height:360,
        width:'100%',
        backgroundColor:"#008080",
        position:'relative',

    },
    vetPhoto:{
        width:'100%',
        flex:1,
        height:360,
        position:'absolute',
    },
        addImage:{
    justifyContent:'center',
    right:-250,
    top:10, 
    position:'relative',
    fontSize:30
        },
    drName:{
        padding:15,
        textAlign:'center',
        fontSize:25
    },
    about:{
        marginLeft:20,
        fontSize:15,
        padding:10
    },
    help:{
        height:150,
        width:'80%',
        alignSelf:'center',
        borderRadius:30,
        top:-90,
        elevation:3,
        backgroundColor:"white",
      
    },
    num:{
        textAlign:'center',
        fontSize:20,
        color:'grey'
    },
    input:{
        textAlign:'center',
        fontSize:10,
        color:'grey',
        // padding:10

    },
    inputContainer:{
        height:80,
        width:'90%',
        alignSelf:'center',
        borderRadius:20,
        top:-70,
        elevation:3,
        backgroundColor:"white",
        marginBottom:10
    },
    save:{
        backgroundColor:'#FF914A',
        width:255,
        height:55,
        borderRadius:30,
        padding:14,
        alignSelf:'center',
        marginTop:-50,
        // marginBottom:20
    },
    saveText:{
        color:'white',
        fontWeight:'600',
        textAlign:'center',
        fontSize:18,
    }
})

export default VetProfile