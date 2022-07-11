import { StyleSheet,Text,TouchableOpacity, View} from "react-native";
function AccessButton(props){
    return(
        <View>
            <TouchableOpacity style={styles.accessButton}>
                <Text style={styles.accessButtonText}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
)}

const styles=StyleSheet.create({
    accessButton:{
        marginLeft:33,
        width:294,
        height:55,
        borderRadius:5,
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