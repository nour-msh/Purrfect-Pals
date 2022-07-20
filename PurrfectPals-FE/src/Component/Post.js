import {View,Text,StyleSheet,Image} from 'react-native';

function Post({nav}){
    return(
        <View style={styles.Container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/dog1.jpeg")}
                style={styles.dog1}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name} onPress={()=>nav.navigate('PetProfile')}>Pet Name</Text>
                <Text style={styles.duration}>Duration</Text>
                <Text style={styles.description}>Description:Lorem ipsum dolor sit amet, varius gravida lectus.</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30
    },
    dog1:{
        width:143,
        height:178,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
    },
    textContainer:{
        width:161,
        height:178,
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
    duration:{
        fontSize:15,
        color:'#808080',
        fontWeight:'300'
    },
    description:{
        fontSize:15,
        color:'#808080',
        fontWeight:'100'

    }



})

export default Post