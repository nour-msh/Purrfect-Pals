import { StyleSheet,Text,View, Image} from "react-native";

function EditProfile(){
    return(
        <View>
            <View style={styles.profContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profPic}/>
                <Text style={styles.name}>Full Name</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    profContainer:{
        display:'flex',
        alignSelf:'center',
        marginTop:100

    },
    profPic:{
        width:135,
        height:135,
        borderRadius:100
    },
    name:{
        textAlign:'center'
    }
})

export default EditProfile