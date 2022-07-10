import {Text,View,Image,StyleSheet,TextInput,Button } from 'react-native';
import Logo from '../Component/Logo';


function SignUp(){
    return(
        <View>
            <Logo/>
            <Image source={require('../../assets/signup-doggy.png')}
            style={styles.dog}/>
            <TextInput placeholder='Full name' style={styles.input}></TextInput>
            <TextInput placeholder='Email' style={styles.input}></TextInput>
            <TextInput placeholder='Password' style={styles.input}></TextInput>
            <TextInput placeholder='Phone number' style={styles.input}></TextInput>
            <Button title='Sign Up'/>
            <Text style={styles.member}>Already have an account?</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    dog:{
        width:290,
        height:176,
        marginLeft:33,
        marginTop:103,
    },
    input:{
        height:55,
        width:294,
        borderRadius:5,
        borderWidth: 1,
        marginTop:0,
        marginLeft:33,
        padding:20,
        marginBottom:10,
    },
    member:{
        textAlign:'center',
        color:'#808080',


    }


})

export default SignUp