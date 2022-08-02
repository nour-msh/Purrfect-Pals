import {View,Text,StyleSheet, Image,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { useContext } from "react";
import { UserContext } from "../../App";
import { Ionicons } from '@expo/vector-icons';




function VetPortfolio({navigation}){

  const { userId, userToken, userFullName, userImage } =useContext(UserContext);

    return(
        <View style={styles.container}>
                <KeyboardAvoidingView>
                    <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.profContainer}>
            <Ionicons style={styles.back} name="chevron-back-outline" size={24} color="#FF914A" onPress={() => navigation.goBack()}/>
                <Image source={require('../../assets/Doctor1.png')}
                style={styles.vetPhoto}/>
            </View>
            <View style={styles.help}>
                <Text style={styles.drName} >Dr. {userFullName}</Text>
                <Text style={styles.input}
                ></Text>
                <Text style={styles.input}
                ></Text>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.about}>My specialty:</Text>
            <Text style={styles.about}
            ></Text>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.about}>My success story:</Text>
            <Text style={styles.about}
            ></Text>
            </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}


const styles=StyleSheet.create({
    profContainer:{
        height:360,
        width:'100%',
        backgroundColor:"#008080",
        position:'relative',

    },
    vetPhoto:{
        width:'100%',
        flex:1,
        height:360,
        position:'absolute',
    },
        addImage:{
    justifyContent:'center',
    right:-250,
    top:10, 
    position:'relative',
    fontSize:30
        },
    drName:{
        padding:15,
        textAlign:'center',
        fontSize:25
    },
    back:{
        position:'absolute',
        zIndex:1,
        left:20,
        top:20
    },
    about:{
        marginLeft:20,
        fontSize:16,
        padding:10
    },
    help:{
        height:150,
        width:'80%',
        alignSelf:'center',
        borderRadius:30,
        top:-90,
        elevation:3,
        backgroundColor:"white",
      
    },
    num:{
        textAlign:'center',
        fontSize:20,
        color:'grey'
    },
    input:{
        textAlign:'center',
        fontSize:10,
        color:'grey',
        // padding:10

    },
    inputContainer:{
        height:130,
        width:'90%',
        alignSelf:'center',
        borderRadius:20,
        top:-70,
        elevation:3,
        backgroundColor:"white",
        marginBottom:10
    },
    save:{
        backgroundColor:'#FF914A',
        width:255,
        height:55,
        borderRadius:30,
        padding:14,
        alignSelf:'center',
        marginTop:-50,
        // marginBottom:20
    },
    saveText:{
        color:'white',
        fontWeight:'600',
        textAlign:'center',
        fontSize:18,
    }
})

export default VetPortfolio