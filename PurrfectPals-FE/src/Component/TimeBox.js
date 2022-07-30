import { StyleSheet,View,TextInput} from "react-native";


function TimeBox(){
return(
        <View style={styles.container}>
            <TextInput style={styles.time}>9:00</TextInput>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:79,
        height:33,
        borderRadius:20,
        backgroundColor:'white',
        marginLeft:20,
        elevation:5

    },
    time:{
        textAlign:'center',
        padding:8,
        fontWeight:'100'
    }


})
export default TimeBox;