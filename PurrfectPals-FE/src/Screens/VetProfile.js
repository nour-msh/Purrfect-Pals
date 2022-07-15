import { Text,StyleSheet,View,Image, TouchableOpacity } from "react-native";
import DateBox from "../Component/DateBox";
import ProfBox from "../Component/ProfBox";
import TimeBox from "../Component/TimeBox";

function VetProfile(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/Doctor1.png")}
                style={styles.vetImage}/>
            <ProfBox name='Vet name'/>
            </View>
            <View>
                <Text style={styles.schedule}>Schedule</Text>
            </View>
            <View style={styles.dateCont}>
                <DateBox/>
                <DateBox/>
                <DateBox/>
                <DateBox/>
            </View>
            <Text style={styles.hours}>Visiting Hours</Text>
            <View style={styles.timeCont}>
                <TimeBox/>
                <TimeBox/>
                <TimeBox/>
                <TimeBox/>
            </View>
            <View>
                <TouchableOpacity style={styles.appButton}>
                    <Text style={styles.appText}>Book Appointment</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles=StyleSheet.create({
    imageContainer:{
        width:360,
        height:382,
        backgroundColor:"#008080",
    },
    vetImage:{
        width:360,
        height:382,
    },
    schedule:{
        marginTop:80,
        marginLeft:20
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
        padding:20,
        textAlign:'center',
        marginTop:40
    },
    appText:{
        color:'white',
        fontWeight:'600'
    },
    hours:{
        padding:25,
        textAlign:'center'
    }
})

export default VetProfile