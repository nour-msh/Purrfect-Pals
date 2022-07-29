import {View,Text,StyleSheet, Image} from 'react-native'


function VetProfile(){
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/Doctor1.png')}
                style={styles.vetPhoto}/>
                <Text style={styles.drName}>Doctor's Name</Text>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        alignSelf:'center',
        padding:50,
    },
    vetPhoto:{
        width: 135,
        height: 135,
        borderRadius: 100,
    },
    drName:{
        top:20,
        textAlign:'center',
        fontSize:18
    }
})

export default VetProfile