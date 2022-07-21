import { View,Text,StyleSheet,Image, TouchableOpacity} from "react-native";
import ProfBox from "../Component/ProfBox";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";


function PetProfile({ navigation}){
    return(
        <View style={styles.Container}>
            <ScrollView>

            <View style={styles.imageContainer}>
                <View>
                <Ionicons name="chevron-back-outline" size={24} color="#FF914A" onPress={() => navigation.goBack()}/>
                </View>

                <Image source={require("../../assets/dog3.jpg")}
                style={styles.dogProfilePic}/>
                <ProfBox name='Pet name' petType='Pet Type'/>
            </View>
            
            <View style={styles.profContainer}>

                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/profile-pic.jpeg')}
                    style={styles.profImg}/>
                    <View style={{flex:0.06}}/>
                    <Text>Name of reviewer</Text>
                </View>
                <View style={styles.review}>

                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus dolor, pretium non sapien id..</Text>
                </View>
            </View>
            <View style={styles.profContainer}>

                <View style={styles.infoContainer}>
                    <Image source={require('../../assets/profile-pic.jpeg')}
                    style={styles.profImg}/>
                    <View style={{flex:0.06}}/>
                    <Text>Name of reviewer</Text>
                </View>
                <View style={styles.review}>

                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus dolor, pretium non sapien id..</Text>
                </View>
            </View>
            </ScrollView>


                <TouchableOpacity style={styles.reviewButton}>
                    <Text style={styles.reviewButtonText}>Add Review</Text>
                </TouchableOpacity>
        </View>
        )}

const styles=StyleSheet.create({
    imageContainer:{
        height:360,

    },
    dogProfilePic:{
        width:'100%',
        flex:1,
        height:360,
    },
    profContainer:{
        padding:20,
       flex:1,
    },
    infoContainer:{
        display:'flex',
        flexDirection:'row',
        // marginTop:100,
        // marginLeft:40,
    },
    profImg:{
        width:25,
        height:25,
        borderRadius:20
    },


    reviewButton:{
        width:'50%',
        height:63,
        backgroundColor:'#FF914A',
        position:'absolute',
        opacity:1,
        borderRadius:20,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        bottom:0

    },
    reviewButtonText:{
        fontSize:18,
        fontWeight:'600',
        color:'white',
        textAlign:'center'
    }
})

export default PetProfile