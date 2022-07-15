import {Text, Image,View, StyleSheet} from 'react-native';

function Profile(){
    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profilePic}/>
                <View style={{flex:0.05}}/>
                <Text style={styles.location}>Location {"\n"} Lebanon, Beirut</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        marginTop:50,
        marginLeft:15

    },
    profilePic:{
        width:75,
        height:75,
        borderRadius:50
    },
    location:{
        textAlign:'center',
        marginTop:10,
    }
})

export default Profile