import { View,Text,StyleSheet,Image, TouchableOpacity } from "react-native";
import ProfBox from "../Component/ProfBox";

function PetProfile(){
    return(
        <View style={styles.Container}>
            <View>
                <Image source={require("../../assets/dog3.jpg")}
                style={styles.dogProfilePic}/>
                <ProfBox name='Pet name'/>
            </View>
            <View style={styles.profContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profImg}/>
                <View style={{flex:0.06}}/>
                <Text>Name of reviewer</Text>
            </View>
            <View style={styles.review}>

                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus dolor, pretium non sapien id..</Text>
            </View>
            <View>

                <View style={styles.lowerContainer}></View>
                <TouchableOpacity style={styles.reviewButton}>
                    <Text style={styles.reviewButtonText}>Add Review</Text>
                </TouchableOpacity>
            </View>
        </View>
        )}

const styles=StyleSheet.create({
    Container:{
        alignSelf:'center',

    },
    dogProfilePic:{
        width:360,
        height:411,
        position:'relative'

    },
    profContainer:{
        display:'flex',
        flexDirection:'row',
        marginTop:100,
        marginLeft:40
    },
    profImg:{
        width:25,
        height:25,
        borderRadius:20
    },
    review:{
        marginLeft:40,
        width:300
    },
    lowerContainer:{
        width:360,
        height:120,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#FF914A',
        opacity:0.5,
        marginTop:35,
        position:'relative',


    },
    reviewButton:{
        width:165,
        height:63,
        backgroundColor:'#FF914A',
        position:'absolute',
        marginTop:70,
        textAlign:'center',
        opacity:1,
        borderRadius:20,
        padding:20,
        alignSelf:'center',

    },
    reviewButtonText:{
        fontSize:18,
        fontWeight:'400',
        color:'white'
    }
})

export default PetProfile