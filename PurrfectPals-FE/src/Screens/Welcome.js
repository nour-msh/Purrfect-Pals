import {StyleSheet,View,Image,Text, Button} from 'react-native'
import AccessButton from '../Component/AccessButton'

function Welcome(){
    return(
        <View>
            <Image source={require("../../assets/Purr-Logo.png")}
            style={styles.logo}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    logo:{
        marginTop:290,
        alignSelf:'center',
        width:151,
        height:157
    },
    startBtn:{
        width:40,
        height:55,
        color:"#FF914A",
    }

})

export default Welcome