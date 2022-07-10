import {StyleSheet,View,Image,Text} from 'react-native'
import Logo from '../Component/Logo'

function Greeting(){
    return(
        <View>
            <Logo/>
            <Image source={require("../../assets/doggy-greeting.png")}
            style={styles.doggy}/>
            <Text>Hi Pal.</Text>
            <Text>Pet set. Pet ready. Pet go!</Text>
        </View>
    )
}

const styles=StyleSheet.create({git
    doggy:{
        width:312,
        height:319,
        marginLeft:23,
        marginTop:133,
    }

})

export default Greeting