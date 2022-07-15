import {Text, Image,View, StyleSheet,ScrollView,TextInput} from 'react-native';
import Pet from '../Component/Pet';

function Profile(){
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.profileContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profilePic}/>
                <View style={{flex:0.3}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Nour Mshawrab</Text>
                    <Text style={styles.location}>Lebanon, Beirut</Text>
                </View>
            </View>
            <View>
                    <TextInput placeholder="Search" style={styles.search}></TextInput>
                </View>
    
            <View>
                <Pet/>
                <Pet/>
                <Pet/>
            </View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        marginTop:50,
        marginLeft:25

    },
    profilePic:{
        width:75,
        height:75,
        borderRadius:50,
    },
    search:{
        fontSize:15,
        height: 40,
        width: 290,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor:'#FF914A',
        marginTop: 40,
        marginLeft: 33,
        padding: 10,
    },
    textContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:10
    },
    location:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'200'
    },
    name:{
        fontSize:20,
        fontWeight:'600'
    }
})

export default Profile