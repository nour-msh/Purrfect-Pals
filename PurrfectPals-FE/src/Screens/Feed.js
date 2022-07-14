import {Image,Text,View, StyleSheet} from "react-native";
import Vet from "../Component/Vet";

function Feed(){
    return(
        <View>
            <View style={styles.userContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profilePic}/>
                <View style={{flex:0.05}}/>
                <Text style={styles.userName}>User's Name</Text>
            </View>
            <View style={styles.Vets}>
            <Vet/>
            <Vet/>
            <Vet/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    userContainer:{
        display:'flex',
        flexDirection:"row",
        marginLeft:31,
        marginTop:50,
        

    },
    profilePic:{
        width:50,
        height:50,
        borderRadius:30,
       

    },
    userName:{
      marginTop:10

    },
    Vets:{
        display:'flex',
        flexDirection:'row',
    },

})


export default Feed