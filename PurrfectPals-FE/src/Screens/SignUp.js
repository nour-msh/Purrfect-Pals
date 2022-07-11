import {Text,View,Image,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import AccessButton from '../Component/AccessButton';
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
            <AccessButton buttonTitle='Sign Up' />
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
        borderRadius:5,
        borderWidth: 1,
        borderColor:'#808080',
        marginTop:0,
        marginLeft:33,
        padding:15,
        marginBottom:10,
    },
    member:{
        textAlign:'center',
        color:'#808080',
        padding:10
    }


})

export default SignUp