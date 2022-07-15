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
            
        </View>
        )}



export default PetProfile