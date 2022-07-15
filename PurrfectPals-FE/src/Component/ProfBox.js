import { StyleSheet,Text,View } from "react-native";

function ProfBox(props){
    return(
        <View style={styles.profBox}>
            <Text style={styles.name}>{props.name}</Text>
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
        alignSelf:'center'
    },
    name:{
        padding:10,
        textAlign:'center',
        fontWeight:'600',
        fontSize:24,
        fontWeight:'600'
    },
    // petType:{
    //     fontSize:14,
    //     color:'grey',
    //     textAlign:'center'
    // }
})

export default ProfBox
