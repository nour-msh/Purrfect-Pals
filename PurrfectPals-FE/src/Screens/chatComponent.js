import firebase, { database } from "../../firebase";
import { StatusBar } from "expo-status-bar";
import { Header } from 'react-native-elements';
import {
  collection,
  orderBy,
  onSnapshot,
  query,
  addDoc,
} from "firebase/firestore";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../App";
import { useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
const ChatComponent = () => {
  const { userId, userToken, userFullName,userImage } = useContext(UserContext);
  const [messages, setMessages] = useState([]);


  
  useEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("snapshot");
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
          avatar: doc.data().avatar
        }))
      );
    });
    return unsubscribe;
  }, []);

  console.log(messages)
  //   const db = firebase.firestore();
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <>
    <View>
      <Header
       backgroundColor='#FF914A'
      centerComponent={{
        text: "Purrfect Pals' community ",
        style: { color: '#fff', fontSize: 16 },
      }}/>
    </View>
    <GiftedChat
      showUserAvatar={true}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userId,
        name: userFullName,
        avatar:userImage,
      }}
      messagesContainerStyle={{
        backgroundColor: "white",        
      }}
      />
      </>
  );
};

const styles=StyleSheet.create({
  header:{
    height:60,
    width:'100%',
    backgroundColor:'#FF914A',
    opacity:0.8,
    
  },
})

export default ChatComponent;
