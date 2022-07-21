import { StyleSheet,Text,TouchableOpacity, View} from "react-native";
function AccessButton(props){
    return(
        <View>
            <TouchableOpacity style={styles.accessButton} onPress={() =>{props.handlePress()}}>
                <Text style={styles.accessButtonText}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
)}

const styles=StyleSheet.create({
    accessButton:{
        // width:294,
        height:55,
        borderRadius:8,
        backgroundColor:'#FF914A',
        marginTop:8
    },
    accessButtonText:{
        color:'white',
        fontSize:18,
        padding:15,
        textAlign:"center",
        fontWeight:"600"
    },
})

export default AccessButton