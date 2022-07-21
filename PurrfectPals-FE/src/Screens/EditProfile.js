import { StyleSheet,Text,View, Image} from "react-native";
import AccessButton from "../Component/AccessButton";
import { Ionicons } from '@expo/vector-icons';

function EditProfile({navigation}){
    return(
        <View style={styles.container}>
            <Ionicons style={styles.editIcon} name="chevron-back-outline" size={24} color="#FF914A" onPress={() => navigation.goBack()}/>
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
    container:{
// alignItems:'center'
padding:40
    },
    profContainer:{
        display:'flex',
        alignSelf:'center',
        marginTop:60,
        marginBottom:20,
        // backgroundColor:'#FF914A',
        // height:261,
        // width:360

    },
    editIcon:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
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
        // padding:20,
        color:'#808080',
        marginBottom:25
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