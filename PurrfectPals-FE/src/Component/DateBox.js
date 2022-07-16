import { StyleSheet,Text,View} from "react-native";

function DateBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.dayNum}>4</Text>
            <Text style={styles.day}>Sat</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:51,
        height:80,
        borderRadius:20,
        backgroundColor:'white',
        marginTop:10,
        marginLeft:20
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