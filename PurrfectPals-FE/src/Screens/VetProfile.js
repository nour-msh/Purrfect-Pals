import { Text,StyleSheet,View,Image, TouchableOpacity,ScrollView } from "react-native";
import DateBox from "../Component/DateBox";
import ProfBox from "../Component/ProfBox";
import TimeBox from "../Component/TimeBox";
import { Ionicons } from '@expo/vector-icons';


function VetProfile({ navigation}){
    return(
        <View style={styles.container}>
               
              
            <View style={styles.imageContainer}>
                    <Ionicons style={styles.back} name="chevron-back-outline" size={24} color="#FF914A" onPress={() => navigation.goBack()}/>
                    <Image source={require("../../assets/Doctor1.png")}
                    style={styles.vetImage}/>
                {/* <ProfBox name='Vet name'/> */}
            </View>
            <View>
                <Text style={styles.schedule}>Schedule</Text>
            </View>
            <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>

            <View style={styles.dateCont}>
                <DateBox/>
                <DateBox/>
                <DateBox/>
                <DateBox/>
                <DateBox/>
                <DateBox/>
            </View>
            </ScrollView>
            <Text style={styles.hours}>Visiting Hours</Text>
            <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>

            <View style={styles.timeCont}>
                <TimeBox/>
                <TimeBox/>
                <TimeBox/>
                <TimeBox/>
            </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={styles.appButton}>
                    <Text style={styles.appText}>Book Appointment</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F3F5F8',
        flex:1,
        // alignSelf:'center',
    },
    back:{
        position:'absolute',
        zIndex:1,
        left:20,
        top:20
    },

    imageContainer:{
        height:360,
        width:'100%',
        backgroundColor:"#008080",
        position:'relative',

    },
    vetImage:{
        width:'100%',
        flex:1,
        height:360,
        position:'absolute',
    },
    schedule:{
        marginTop:30,
        marginLeft:20,
        fontSize:20,
        fontWeight:'500'

    },
    dateCont:{
        display:'flex',
        flexDirection:'row',
    },
    timeCont:{
        display:'flex',
        flexDirection:'row',
    },
    appButton:{
        backgroundColor:'#FF914A',
        width:255,
        height:55,
        borderRadius:30,
        padding:14,
        alignSelf:'center',
        marginTop:30,
        marginBottom:20
    },
    appText:{
        color:'white',
        fontWeight:'600',
        textAlign:'center',
        fontSize:18,
    },
    hours:{
        padding:15,
        textAlign:'center',
        fontSize:13,
        color:'grey'
    }
})

export default VetProfile