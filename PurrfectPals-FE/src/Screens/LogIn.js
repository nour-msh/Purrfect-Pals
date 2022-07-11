import {View,TextInput,Text,Image,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Logo from '../Component/Logo';

function LogIn(){
    return(
        <View>
            <Logo/>
            <Image source={require('../../assets/login-kitty.png')}
            style={styles.kitty}/>
            <TextInput placeholder='Email' style={styles.input}></TextInput>
            <TextInput placeholder='Password' style={styles.input}></TextInput>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.myText}>I’ve missed {'\n'} you.</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    kitty:{
        width:270,
        height:269,
        marginLeft:74,
        marginTop:55,
        marginBottom:25

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
    loginButton:{
        marginLeft:33,
        width:294,
        height:55,
        borderRadius:5,
        backgroundColor:'#FF914A',
        marginTop:10,
    },
    loginButtonText:{
        color:'white',
        padding:18,
        textAlign:"center",
        fontWeight:"600"
    },
    myText:{
        fontSize:28,
        marginLeft:33,
        marginTop:10

    }

})

export default LogIn