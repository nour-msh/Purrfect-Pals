import { StyleSheet,Text,View} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function DateBox(){
    return(
        <View style={styles.container}>
            {/* <TextInput style={styles.dayNum}>4</TextInput> */}
            <TextInput style={styles.day}>Sat</TextInput>
        </View>
    )}

const styles=StyleSheet.create({
    container:{
        width:"90%",
        height:40,
        borderRadius:15,
        backgroundColor:'white',
        marginTop:10,
        marginLeft:20,
        elevation:5
    },
    dayNum:{
        textAlign:'center',
        marginTop:10,
        fontWeight:'bold',
        fontSize:20
    },
    day:{
        textAlign:'center',
        marginTop:10,
        fontWeight:'100'

    }


})
export default DateBox