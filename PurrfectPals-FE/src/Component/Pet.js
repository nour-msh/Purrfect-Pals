import {Text,StyleSheet,View, Image} from "react-native";

function Pet(){
    return(
        <View style={styles.Container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/dog2.jpeg")}
                style={styles.dog1}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>Pet Name</Text>
                <Text style={styles.desc}>Breed</Text>
                <Text style={styles.desc}>Age</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:50
    },
    dog1:{
        width:143,
        height:178,
        borderRadius:20,
    },
    textContainer:{
        width:161,
        height:132,
        backgroundColor:'white',
        borderLeftColor:'white',
        borderRightColor:'#e5e5e5',
        borderBottomColor:'#e5e5e5',
        borderTopColor:'#e5e5e5',
        borderWidth:1,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,
        marginTop:25,
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