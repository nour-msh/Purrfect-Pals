import {Text, Modal,Pressable, Image,View, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Pet from '../Component/Pet';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


function Profile({ navigation}){
    const [isModalVisible, setModalVisible] = useState(false);
    const handleModal = () => setModalVisible(() => !isModalVisible);


    return(
        <View style={styles.container}>
            <View style={styles.editIcon}>
                <Ionicons name="chevron-back-outline" size={24} color="#FF914A" onPress={() => navigation.goBack()} />
                <AntDesign name="edit" size={24} color="black" onPress={()=>navigation.navigate('EditProfile')} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                <Pet nav={navigation}/>
                <Pet nav={navigation}/>
                <Pet nav={navigation}/>
            </View>
            </ScrollView>
            <TouchableOpacity style={styles.addPet} onPress={handleModal}>
                <Text style={styles.add}>+</Text>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
            setModalVisible(!isModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                    <Pressable
                    style={styles.button}
                    onPress={() => setModalVisible(!isModalVisible)}
                    >
                    <Text style={styles.textStyle}>Add Image</Text>
                    </Pressable>
                    </View>
                    <View>
                        <TextInput style={styles.modalText} placeholder='Pet Name'></TextInput>
                        <TextInput style={styles.modalText} placeholder='Pet Breed'></TextInput>
                        <TextInput style={styles.modalText} placeholder='Pet Age'></TextInput>
                    {/* <Text style={styles.modalText}>Hello World!</Text> */}
                    </View>
                    <Pressable
                    style={styles.savebutton}
                    onPress={() => setModalVisible(!isModalVisible)}
                    >
                    <Text style={styles.saveText}>Save</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:30,
        justifyContent:'center'
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        marginTop:25,
        marginBottom:25

    },
    profilePic:{
        width:75,
        height:75,
        borderRadius:50,
    },
    editIcon:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
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
    },
    addPet:{
        width:'20%',
        height:'10%',
        backgroundColor:'#FF914A',
        borderRadius:20,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        bottom:0
    },
    add:{
        fontSize:40,
        color:'white',
        fontWeight:"700",
        textAlign:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor:'#FF914A'
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      savebutton:{
        backgroundColor:'transparent',
      },
      saveText:{
        color:'#FF914A',
        textDecorationLine: 'underline'
      },
      modalText: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center"
      }
    
})

export default Profile