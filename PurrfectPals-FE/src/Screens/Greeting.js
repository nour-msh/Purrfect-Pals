import {StyleSheet,View,Image,Text} from 'react-native';
import Logo from '../Component/Logo';

function Greeting(){
    return(
        <View>
            <Logo/>
            <Image source={require("../../assets/doggy-greeting.png")}
            style={styles.doggy}/>
            <Text style={styles.G1}>Hi Pal.</Text>
            <Text style={styles.G2}>Pet set. Pet ready.{'\n'} Pet go!</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    doggy:{
        width:312,
        height:319,
        marginLeft:23,
        marginTop:133,
    },
    G1:{
        color:'#FF914A',
        fontSize: 24,
        textAlign:'center',
        opacity:0.5,
    },
    G2:{
        fontSize:15,
        // marginLeft:112,
        textAlign:'center',
    }

})

export default Greeting