import {Text, Image,View, StyleSheet,ScrollView} from 'react-native';
import CategoryBox from '../Component/CategoryBox';
import Pet from '../Component/Pet';

function Profile(){
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.profileContainer}>
                <Image source={require('../../assets/profile-pic.jpeg')}
                style={styles.profilePic}/>
                <View style={{flex:0.3}}/>
                <Text style={styles.location}>Location {"\n"} Lebanon, Beirut</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.category} >
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
            </View>
            </ScrollView>
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
    },
    category:{
        display:'flex',
        flexDirection:'row',
        padding:15
    }
})

export default Profile