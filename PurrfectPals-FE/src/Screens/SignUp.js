import {Text,View,Image,StyleSheet,TextInput, ToastAndroid} from 'react-native';
import React, {useState } from 'react';
import axios from 'axios';

import AccessButton from '../Component/AccessButton';
import Logo from '../Component/Logo';


function SignUp({navigation}){
    const[fullName,setFullname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phoneNumber,setPhoneNumber]=useState("");

    const handleSubmitSignup = () => {
        const data = {
          full_name: fullName,
          email: email,
          password: password,
          phone_number: phoneNumber
        };
        //e.preventDefault();
        axios({
          method: "POST",
          data,
          url: "http://192.168.1.4:5000/user/register",
        })
          .then((res) => {ToastAndroid.show(res, ToastAndroid.LONG)})
          .catch((error) => console.log(error));
      };

      const handleFullNameChange = (value) => {
        setFullname(value)
      }

      const handleEmailChange = (value) => {
        setEmail(value)
      }

      const handlePasswordChange = (value) => {
        setPassword(value)
      }

      const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value)
      }
    
        
    return(
        <View style={styles.container}>
            <Logo/>
            <Image source={require('../../assets/signup-doggy.png')}
            style={styles.dog}/>

            <TextInput placeholder='Full name' style={styles.input} 
            value={fullName} onChangeText={handleFullNameChange}
            ></TextInput>

            <TextInput placeholder='Email' style={styles.input}
            value={email} onChangeText={handleEmailChange}
             ></TextInput>

            <TextInput placeholder='Password' style={styles.input} 
            value={password} onChangeText={handlePasswordChange}
            ></TextInput>

            <TextInput placeholder='Phone number' style={styles.input} 
            value={phoneNumber} onChangeText={handlePhoneNumberChange}
            ></TextInput>

            <AccessButton buttonTitle='Sign Up' 
             handlePress={handleSubmitSignup}
/>

            <Text style={styles.member} onPress={()=>navigation.navigate('LogIn')}>Already have an account?</Text>
        </View>
    )
}

const styles=StyleSheet.create({
  container:{
    padding:25
  },
    dog:{
        width:290,
        height:176,
        // marginLeft:33,
        marginTop:25,
        alignSelf:'center'
    },
    input:{
        fontSize:18,
        height:55,
        // width:294,
        borderRadius:8,
        borderWidth: 1,
        borderColor:'#e5e5e5',
        marginTop:0,
        // marginLeft:33,
        padding:15,
        marginBottom:10,
    },
    member:{
        textAlign:'center',
        color:'#CAC8C8',
        padding:10
    }


})

export default SignUp