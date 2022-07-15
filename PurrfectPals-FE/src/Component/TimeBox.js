import { StyleSheet,Text,View} from "react-native";

function TimeBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.time}>9:00</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:79,
        height:33,
        borderRadius:20,
        backgroundColor:'#008080',
        // marginTop:30,
        marginLeft:20
    },
    time:{
        textAlign:'center',
        padding:8
    }


})

export default TimeBox