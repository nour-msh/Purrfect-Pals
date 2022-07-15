import {Text,View,Image,StyleSheet,TextInput, ToastAndroid} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AccessButton from '../Component/AccessButton';
import Logo from '../Component/Logo';


function SignUp(){
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
          url: "http://127.0.0.1:5000/user/register",
        })
          .then((res) => {ToastAndroid.show(res, ToastAndroid.LONG)})
          .catch((error) => {ToastAndroid.show(error, ToastAndroid.LONG)});
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

            <Text style={styles.member}>Already have an account?</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    dog:{
        width:290,
        height:176,
        marginLeft:33,
        marginTop:25,
    },
    input:{
        fontSize:18,
        height:55,
        width:294,
        borderRadius:8,
        borderWidth: 1,
        borderColor:'#e5e5e5',
        marginTop:0,
        marginLeft:33,
        padding:15,
        marginBottom:10,
    },
    member:{
        textAlign:'center',
        color:'#e5e5e5',
        padding:10
    }


})

export default SignUp