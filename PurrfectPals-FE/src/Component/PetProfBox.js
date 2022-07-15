import { StyleSheet,Text,View } from "react-native";

function PetProfBox(){
    return(
        <View style={styles.profBox}>
            <Text style={styles.petName}>Pet Name</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    profBox:{
        width:274,
        height:149,
        backgroundColor:'white',
        borderRadius:30,
        position:'absolute',
        marginTop:330
    },
    petName:{
        padding:20,
        textAlign:'center',
        fontWeight:'600'
    }
})

export default PetProfBox
