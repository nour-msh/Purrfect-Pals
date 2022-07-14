import {Text, View, StyleSheet, Image} from 'react-native';

function Vet(){
    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                
            <View style={styles.imageContainer}>
            <Image source={require("../../assets/Doctor1.png")}
                style={styles.Doctor1}/>
            </View>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.vetName}>Vet's Name</Text>
            </View>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        marginTop:50,
        alignItems:'center'

    },
    upperContainer:{
        width:162,
        height:103,
        backgroundColor:'#FF914A',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        opacity: 0.7,
    },
    imageContainer:{
        height:200,
        width:162,
        backgroundColor:'none',
    },
    Doctor1:{
        height:153,
        width:162,
    },
    bottomContainer:{
        width:162,
        height:50,
        backgroundColor:'white',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderWidth:1,
        borderBottomColor:'#e5e5e5',
        borderLeftColor:'#e5e5e5',
        borderRightColor:'#e5e5e5',
        borderTopColor:'white'
    },
    vetName:{
        textAlign:'center',
        fontSize:15,

    }


})

export default Vet