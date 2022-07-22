import { StyleSheet,Text,View, Image} from "react-native";
import AccessButton from "../Component/AccessButton";
import axios from "axios";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";

function EditProfile({navigation}){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleUpdate = () => {
            const data = {
            full_name:fullName ,
            email: email,
            phone_number: phoneNumber
        };
        axios({
            method: "put",
            data,
            url: `http://192.168.1.4:5000/user/updateUserProfile/${id}`,
          })
        .then(response => {
            setStatus(response.status);
        })
    };

    const handleFullNameChange = (value) => {
        setFullName(value)
      }
      const handleNumberChange = (value) => {
        setPhoneNumber(value)
      }
      const handleEmailChange = (value) => {
        setEmail(value)
      }


    return(
        <View style={styles.container}>
            <Ionicons style={styles.editIcon} name="chevron-back-outline" size={24} color="#FF914A" onPress={() => navigation.goBack()}/>
            <View style={styles.profContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profPic}/>
                <Text style={styles.name}>Change Profile Photo</Text>
            </View>
            <View>
                <Text style={styles.info}>My Name</Text>
                <TextInput style={styles.input}  value={fullName} onChangeText={handleFullNameChange}></TextInput>

                <Text style={styles.info}>Phone Number</Text>
                <TextInput style={styles.input} value={phoneNumber} onChangeText={handleNumberChange}></TextInput>

                <Text style={styles.info}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={handleEmailChange}></TextInput>

                <Text style={styles.map}>Edit on map</Text>
            </View>
            <AccessButton buttonTitle='Save' onPress={handleUpdate} style={styles.saveButton}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
// alignItems:'center'
padding:40
    },
    profContainer:{
        display:'flex',
        alignSelf:'center',
        marginTop:60,
        marginBottom:20,
        // backgroundColor:'#FF914A',
        // height:261,
        // width:360

    },
    editIcon:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    profPic:{
        width:135,
        height:135,
        borderRadius:100
    },
    name:{
        textAlign:'center',
        padding:10,
        color:'#008080'
    },
    info:{
        // padding:20,
        color:'#808080',
        marginBottom:25
    },
    map:{
        fontSize:13,
        color:'#008080',
        textDecorationLine: 'underline',
        textAlign:'center',
        padding:70
    },
    input:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})

export default EditProfile