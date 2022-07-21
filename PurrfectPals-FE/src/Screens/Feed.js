import {View, StyleSheet, ScrollView, TextInput} from "react-native";
import Vet from "../Component/Vet";
import Post from "../Component/Post"
function Feed({navigation}){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View>                   
                    <TextInput placeholder="Search" style={styles.search}></TextInput>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    
                    <View style={styles.Vets}>
                        <Vet nav={navigation}/>
                        <Vet nav={navigation}/>
                        <Vet nav={navigation}/>
                    </View>
            </ScrollView>
            <View style={styles.Posts}>
                <Post nav={navigation}/>
                <Post nav={navigation}/>
                <Post nav={navigation}/>
                <Post nav={navigation}/>
            </View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
padding:25,
    },
    search:{
        fontSize:15,
        height: 40,
        // width: 290,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor:'#FF914A',
        marginTop: 30,
        // marginLeft: 33,
        padding: 10,
        marginBottom: 10,
    },
    userContainer:{
        display:'flex',
        flexDirection:"row",
        // marginLeft:31,
        marginTop:50,
        

    },
    profilePic:{
        width:50,
        height:50,
        borderRadius:30,
       

    },
    userName:{
      marginTop:10

    },
    Vets:{
        display:'flex',
        flexDirection:'row',
        // marginLeft:20
    },

})


export default Feed