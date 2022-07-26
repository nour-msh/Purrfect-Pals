import firebase, { database } from "../../firebase";
import { StatusBar } from "expo-status-bar";
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
  const { userId, userToken, userFullName } = useContext(UserContext);
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
        }))
      );
    });
    return unsubscribe;
  }, []);
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
    <GiftedChat
      showUserAvatar={true}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userId,
        name: userFullName,
        avatar: "https://i.pravatar.cc/300",
      }}
      messagesContainerStyle={{
        backgroundColor: "white",
        
      }}
    />
  );
};

export default ChatComponent;
