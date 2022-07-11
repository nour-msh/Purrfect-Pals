import {Text,View,Image,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
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
            <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.member}>Already have an account?</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    dog:{
        width:290,
        height:176,
        marginLeft:33,
        marginTop:50,
    },
    input:{
        height:55,
        width:294,
        borderRadius:5,
        borderWidth: 1,
        marginTop:0,
        marginLeft:33,
        padding:15,
        marginBottom:10,
    },
    signupButton:{
        marginLeft:33,
        width:294,
        height:55,
        borderRadius:5,
        backgroundColor:'#FF914A',
        marginTop:15
    },
    signupButtonText:{
        color:'white',
        padding:18,
        textAlign:"center",
        fontWeight:"600"
    },
    member:{
        textAlign:'center',
        color:'#808080',
        padding:5
    }


})

export default SignUp