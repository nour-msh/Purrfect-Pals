import {StyleSheet,View,Image,Text, Button} from 'react-native'
import AccessButton from '../Component/AccessButton'

function Welcome(){
    return(
        <View>
            <Text style={styles.welcome}>Welcome to {'\n'} Purrfect Pals.</Text>
            <Image source={require("../../assets/Purr-Logo.png")}
            style={styles.logo}
            />
            {/* <Button title="Get Started" style={styles.startBtn}/> */}
            <AccessButton buttonTitle='Get Started'/>
        </View>
    )
}

const styles=StyleSheet.create({
    welcome:{
        fontSize: 24,
        textAlign:"center",
        marginTop: 64,
        marginLeft: 55,
    },
    logo:{
        marginTop:272,
        marginLeft:105,
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