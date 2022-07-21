import { StyleSheet,Text,View } from "react-native";

function ProfBox(props){
    return(
        <View style={styles.profBox}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.petType}>{props.petType}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    profBox:{
        width:'80%',
        height:120,
        backgroundColor:'white',
        borderRadius:30,
        position:'relative',
        marginTop:300,
        alignSelf:'center'
    },
    name:{
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

export default ProfBox
