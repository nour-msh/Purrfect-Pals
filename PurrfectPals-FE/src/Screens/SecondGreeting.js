import {Text,View,Image,StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../Component/Logo';

function SecondGreeting(){
    return(
        <View>
            <Logo/>
            <Image source={require("../../assets/kitty-greeting.png")}
            style={styles.kitty}/>
            <Text style={styles.G1}>Hi Hooman.</Text>
            <Text style={styles.G2}>I really wanna see you soon. Sign {"\n"} Up hooman</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    kitty:{
        width:298,
        height:350,
        marginLeft:31,
        marginTop:134,
    },
    G1:{
        color:'#FF914A',
        fontSize: 24,
        textAlign:'center',
        opacity:0.5,
    },
    G2:{
        fontSize:15,
        textAlign:'center',
}
})

export default SecondGreeting