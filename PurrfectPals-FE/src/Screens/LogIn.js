import {View,TextInput,Text,Image,StyleSheet,Button} from 'react-native';
import Logo from '../Component/Logo';

function LogIn(){
    return(
        <View>
            <Logo/>
            <Image source={require('../../assets/login-kitty.png')}
            style={styles.kitty}/>
            <TextInput placeholder='Email' style={styles.input}></TextInput>
            <TextInput placeholder='Password' style={styles.input}></TextInput>
            <Button title='Log In'/>
            <Text style={styles.login}>I’ve missed {'\n'} you.</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    kitty:{
        width:270,
        height:269,
        marginLeft:74,
        marginTop:85,
        marginBottom:30

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
    login:{
        fontSize:28,
        marginLeft:33


    }

})

export default LogIn