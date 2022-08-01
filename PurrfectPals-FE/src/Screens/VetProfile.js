import {View,Text,StyleSheet, Image,ScrollView,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import DateBox from '../Component/DateBox'
import TimeBox from '../Component/TimeBox'
import axios from 'axios';
import { useState } from 'react';


function VetProfile({navigation}){
    const [date, setDate] = useState([])
    const [time, setTime] = useState([]);

    const handleSubmitAppointment = () => {
        const data = {
          date: date,
          time: time,
        };
        axios({
          method: "POST",
          data,
          url: `http://192.168.1.4:5000/user/addAppointment`,
        })
          .then((res) => {
              console.log(res);
          }
          )
          .catch((error) => console.log(error));
      };

      const handleDateChange = (value) => {
        setDate(value)
      }

      const handleTimeChange = (value) => {
        setTime(value)
      }
    return(
        <View style={styles.container}>
                <KeyboardAvoidingView>
                    <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.profContainer}>
                <Image source={require('../../assets/Doctor1.png')}
                style={styles.vetPhoto}/>
                <Text style={styles.drName}>Dr. Name</Text>
            </View>

            <View>
                <Text style={styles.date}>Add my weekly available dates:</Text>
            </View>
            <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>

            <View style={styles.dateCont}>
                <DateBox value={date} onChangeText={handleDateChange}/>
                <DateBox value={date} onChangeText={handleDateChange}/>
                <DateBox value={date} onChangeText={handleDateChange}/>
                <DateBox value={date} onChangeText={handleDateChange}/>
                <DateBox value={date} onChangeText={handleDateChange}/>
                <DateBox value={date} onChangeText={handleDateChange}/>
                <DateBox value={date} onChangeText={handleDateChange}/>

            </View>
            </ScrollView>
            <Text style={styles.date}>Add my weekly available times:</Text>
            <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>

            <View style={styles.timeCont}>
                <TimeBox value={time} onChangeText={handleTimeChange}/>
                <TimeBox value={time} onChangeText={handleTimeChange}/>
                <TimeBox value={time} onChangeText={handleTimeChange}/>
                <TimeBox value={time} onChangeText={handleTimeChange}/>
                <TimeBox value={time} onChangeText={handleTimeChange}/>
                <TimeBox value={time} onChangeText={handleTimeChange}/>
                <TimeBox value={time} onChangeText={handleTimeChange}/>
            </View>
            </ScrollView>
            <TouchableOpacity style={styles.save} onPress={handleSubmitAppointment}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        alignSelf:'center',
        // backgroundColor:"pink",
        padding:20,
    },
    profContainer:{
        padding:50
    },
    vetPhoto:{
        width: 135,
        height: 135,
        borderRadius: 100,
        alignSelf:'center',
    },
    drName:{
        top:20,
        textAlign:'center',
        fontSize:18
    },
    date:{
        fontSize:18,
        padding:20
    },
    dateCont:{
        display:'flex',
        flexDirection:'row',
        marginBottom:20,
        marginTop:20

    },
    timeCont:{
        display:'flex',
        flexDirection:'row',
        marginBottom:15,
        marginTop:20
    },
    save:{
        backgroundColor:'#FF914A',
        width:255,
        height:55,
        borderRadius:30,
        padding:14,
        alignSelf:'center',
        marginTop:30,
        marginBottom:20
    },
    saveText:{
        color:'white',
        fontWeight:'600',
        textAlign:'center',
        fontSize:18,
    }
})

export default VetProfile