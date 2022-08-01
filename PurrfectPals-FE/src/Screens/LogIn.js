import { NavigationHelpersContext } from "@react-navigation/native";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, TextInput, Text, Image, KeyboardAvoidingView,StyleSheet } from "react-native";
import AccessButton from "../Component/AccessButton";
import Logo from "../Component/Logo";
import { UserContext } from "../../App";
import { ScrollView } from "react-native-gesture-handler";

function LogIn({ navigation }) {
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [trigger, setTrigger] = useState(false);
  const { setUserId, setUserToken, setUserFullName, setUserPhoneNumber } = useContext(UserContext);
  const storeData = async (value) => {
    toggleState(value);
    // console.warn(id_token);
    await AsyncStorage.setItem("@id_token", value);
    window.location.reload(false);
  };
  const handleSubmitLogin = () => {
    const data = {
      email: myEmail,
      password: myPassword,
    };

    axios({
      method: "post",
      data,
      url: "http://192.168.1.4:5000/user/login",
    })
      .then((res) => {
        console.log(res.data)
        setUserId(res.data.user_id)
        setUserToken(res.data.token)
        setUserFullName(res.data.user_name)
        setUserPhoneNumber(res.data.user_phone)
        if(res?.data.user_type==="1"){
          navigation.navigate("VetProfile")}
          else{

            navigation.navigate("Tabs");
          }
      })
      .catch((error) => {
        console.log(error)});
  };

  const handleMyEmailChange = (value) => {
    setMyEmail(value);
  };

  const handleMyPasswordChange = (value) => {
    setMyPassword(value);
  };
  return (
       <KeyboardAvoidingView style={styles.container}>
<ScrollView showsVerticalScrollIndicator={false}>


      <Logo />
      <View>
        <Image
          source={require("../../assets/login-kitty.png")}
          style={styles.kitty}
          />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={myEmail}
          onChangeText={handleMyEmailChange}
          ></TextInput>
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
          value={myPassword}
          onChangeText={handleMyPasswordChange}
          ></TextInput>
      </View>
      <AccessButton buttonTitle="Log In" handlePress={handleSubmitLogin} />
      <Text style={styles.myText} onPress={() => navigation.navigate("SignUp")}>
        Not a member yet? Register now
      </Text>
</ScrollView>
</KeyboardAvoidingView>

    );
  }
  
  const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  kitty: {
    width: 270,
    height: 269,
    display: "flex",
    marginTop: 25,
    marginBottom: 40,
    alignSelf: "center",
  },
  input: {
    height:60,
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    marginTop: 0,
    padding: 15,
    marginBottom: 5,
  },
  myText: {
    textAlign: "center",
    color: "#CAC8C8",
    padding: 5,
  },
});

export default LogIn;
