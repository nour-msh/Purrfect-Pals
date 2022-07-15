import { StyleSheet,Text,View} from "react-native";

function DateBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.date}> 4 {"\n"} Sat</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:51,
        height:80,
        borderRadius:20,
        backgroundColor:'#008080',
        marginTop:30,
        marginLeft:20
    },
    date:{
        textAlign:'center',
        marginTop:20
    }


})

export default DateBox