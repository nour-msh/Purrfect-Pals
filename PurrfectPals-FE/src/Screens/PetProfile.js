import { View,Text,StyleSheet,Image, TouchableOpacity } from "react-native";
import PetProfBox from "../Component/PetProfBox";

function PetProfile(){
    return(
        <View style={styles.Container}>
            <View>
                <Image source={require("../../assets/dog3.jpg")}
                style={styles.dogProfilePic}/>
                <PetProfBox style={styles.profBox}/>
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
    
})

export default PetProfile