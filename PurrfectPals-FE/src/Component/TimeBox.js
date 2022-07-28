import { StyleSheet,Text,View} from "react-native";
// import moment from 'moment'
// import React, {useState} from "react";
// import { Header, ListItem,Container,Content } from "react-native-elements";

function TimeBox(){
//     const [timeSlots,setTimeSlots]=useState([])
//     const createTimeSlots= (fromTime,toTime)=>{
//         let startTime=moment(fromTime,'hh:mm A')
//         let endTime=moment(fromTime,'hh:mm A')
//         if (endTime.isBefore(startTime)){
//             endTime.add(1,'day');
//         }
//         let arr=[];
//         while (startTime<= endTime){
//             arr.push(new moment(startTime).format('hh:mm A'));
//             startTime.add(30,'minutes');
//         }
//         return arr;
//     };

//     React.useEffect(()=>{
//         setTimeSlots(createTimeSlots('08:00 AM','09:00 PM'));

//     } ,[]);
    return(
//         <Container>
//             <Header/>
//             <Content>
//                 {timeSlots.map((item,index)=>(
//                     <ListItem>
//                         <Text>
//                             {item}
//                             {timeSlots[index+1]? '-' + timeSlots[index+1]: ''}
//                         </Text>
//                     </ListItem>
//                 ))}
//             </Content>
//         </Container>
        <View style={styles.container}>
            <Text style={styles.time}>9:00</Text>
        </View>
    )
}

// const styles=StyleSheet.create({
//     container:{
//         width:79,
//         height:33,
//         borderRadius:20,
//         backgroundColor:'white',
//         marginLeft:20,
//         elevation:5

//     },
//     time:{
//         textAlign:'center',
//         padding:8,
//         fontWeight:'100'
//     }


// })
export default TimeBox;