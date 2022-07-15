import { StyleSheet,Text,View, Image} from "react-native";
import AccessButton from "../Component/AccessButton";

function EditProfile(){
    return(
        <View>
            <View style={styles.profContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profPic}/>
                <Text style={styles.name}>Full Name</Text>
            </View>
            <View>
                <Text style={styles.info}>My Name</Text>
                <Text style={styles.info}>Phone Number</Text>
                <Text style={styles.info}>Email</Text>
                <Text style={styles.info}>Password</Text>
                <Text style={styles.info}>My Address</Text>
                <Text style={styles.map}>Edit on map</Text>
            </View>
            <AccessButton buttonTitle='Save' style={styles.saveButton}/>
        </View>
    )
}

const styles=StyleSheet.create({
    profContainer:{
        display:'flex',
        alignSelf:'center',
        marginTop:60,
        marginBottom:20

    },
    profPic:{
        width:135,
        height:135,
        borderRadius:100
    },
    name:{
        textAlign:'center',
        padding:10
    },
    info:{
        padding:20,
        color:'#808080'
    },
    map:{
        fontSize:13,
        color:'#008080',
        textDecorationLine: 'underline',
        textAlign:'center',
        marginBottom:70
    }
})

export default EditProfile