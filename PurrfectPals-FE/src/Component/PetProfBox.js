import { StyleSheet,Text,View } from "react-native";

function PetProfBox(){
    return(
        <View style={styles.profBox}>
            <Text style={styles.petName}>Pet name</Text>
            <Text style={styles.petType}>Pet Type</Text>
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
        marginTop:330,
        marginLeft:40
    },
    petName:{
        padding:10,
        textAlign:'center',
        fontWeight:'600',
        fontSize:24,
        fontWeight:'600'
    },
    petType:{
        fontSize:14,
        color:'grey',
        textAlign:'center'
    }
})

export default PetProfBox
