import { StyleSheet,Text,View} from "react-native";

function DateBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.dayNum}>4</Text>
            <Text style={styles.day}>Sat</Text>
        </View>
    )}

// import React, { useState } from 'react'
// import { Button } from 'react-native'
// import DatePicker from 'react-native-date-picker'

// function DateBox(){

//   const [date, setDate] = useState(new Date())
//   const [open, setOpen] = useState(false)

//   return (
//     <>
//       <Button title="Open" onPress={() => setOpen(true)} />
//       <DatePicker
//         modal
//         open={open}
//         date={date}
//         onConfirm={(date) => {
//           setOpen(false)
//           setDate(date)
//         }}
//         onCancel={() => {
//           setOpen(false)
//         }}
//       />
//     </>
//   )
// }



const styles=StyleSheet.create({
    container:{
        width:51,
        height:80,
        borderRadius:20,
        backgroundColor:'white',
        marginTop:10,
        marginLeft:20,
        elevation:5
    },
    dayNum:{
        textAlign:'center',
        marginTop:10,
        fontWeight:'bold',
        fontSize:20
    },
    day:{
        textAlign:'center',
        marginTop:10,
        fontWeight:'100'

    }


})
export default DateBox