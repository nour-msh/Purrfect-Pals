import "react-native-gesture-handler";
import { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./src/Navigation/tabs";
import React from "react";
import DateBox from "./src/Component/DateBox";
import { Time } from "react-native-gifted-chat";
import TimeBox from "./src/Component/TimeBox";
const ContextProvider = createContext();

export const UserContext = createContext();
export default function App() {

  const [userId, setUserId] = useState("")
  const [userFullName, setUserFullName] = useState("")
  const [userPhoneNumber, setUserPhoneNumber] = useState("")
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
                                    setUserPhoneNumber 
                                    }}>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </UserContext.Provider> 
      {/* <TimeBox/> */}
      {/* <DateBox/> */}
    </>
  );
}
