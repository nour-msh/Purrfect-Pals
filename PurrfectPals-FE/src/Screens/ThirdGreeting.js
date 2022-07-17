import {Text,View,Image,StyleSheet} from 'react-native';
import React from 'react';
import Logo from '../Component/Logo';

function ThirdGreeting(){
    return(
        <View style={styles.container}>
            <Logo/>
            <Image source={require("../../assets/cat5.png")}
            style={styles.cat}/>
            <Text style={styles.text}>‘pal, {"\n"} keep {"\n"} scrolling’</Text>
        </View>
    )};
    const styles=StyleSheet.create({
        container:{
            alignSelf:'center'
        },
        cat:{
            width:280,
            height:280,
            marginLeft:31,
            marginTop:134,
        },
        text:{
            fontSize:25,
            textAlign:'left',
            fontWeight:'bold',
            marginTop:70
        }
    });

    export default ThirdGreeting