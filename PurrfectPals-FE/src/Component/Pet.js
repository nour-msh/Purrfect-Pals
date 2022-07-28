import { useEffect, useState } from "react";
import {Text,StyleSheet,View, Image} from "react-native";

function Pet({nav, petId,petName, petAge, petBreed}){


    return(
        <View style={styles.Container}>
                
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/dog2.jpeg")}
                style={styles.dog1}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name} onPress={()=>nav.navigate("PetProfile", {data: {petId: petId}})}>{petName}</Text>
                <Text style={styles.desc}>{petBreed}</Text>
                <Text style={styles.desc}>{petAge}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
    },
    dog1:{
        width:143,
        
        height:178,
        borderRadius:20
    },
    textContainer:{
        flex:0.9,
        height:150,
        top:15,
        backgroundColor:'white',
        borderLeftColor:'white',
        borderRightColor:'#e5e5e5',
        borderBottomColor:'#e5e5e5',
        borderTopColor:'#e5e5e5',
        borderWidth:1,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        padding:15,
    },
    name:{
        fontSize:24,
    },
    desc:{
        fontSize:18,
        color:'#808080',
        fontWeight:'300'
    },

})


export default Pet