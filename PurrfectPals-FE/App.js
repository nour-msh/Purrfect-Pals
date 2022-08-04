import "react-native-gesture-handler";
import { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./src/Navigation/tabs";
import React from "react";
const ContextProvider = createContext();

export const UserContext = createContext();
export default function App() {

  const [userId, setUserId] = useState("")
  const [userFullName, setUserFullName] = useState("")
  const [userPhoneNumber, setUserPhoneNumber] = useState("")
  const [userImage, setUserImage] = useState("");
  const [vetImage, setVetImage] = useState("");

  const [userToken, setUserToken] = useState("")

  return (
    <>
      <UserContext.Provider value={{
          userId,
          setUserId,
          userToken,
          setUserToken,
          userFullName,
          setUserFullName,
          userPhoneNumber,
          setUserPhoneNumber,
          userImage,
          setUserImage,
          vetImage,
          setVetImage
        }}>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </UserContext.Provider>
    </>
  );
}
