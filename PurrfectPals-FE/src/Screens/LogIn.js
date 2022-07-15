import axios from "axios";
import { useState } from "react";

import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import AccessButton from "../Component/AccessButton";
import Logo from "../Component/Logo";

function LogIn() {

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const login = (e) => {
    const data = {
      email: myEmail,
      password: myPassword,
    };
    e.preventDefault();
    axios({
      method: "post",
      data,
      url: "http://127.0.0.1:5000/user/login",
    })
      .then((res) => {console.log(res)})
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Image
        source={require("../../assets/login-kitty.png")}
        style={styles.kitty}
      />
      </View>
      <View>

      <TextInput placeholder="Email" style={styles.input}  value={myEmail}
          onChange={(e) => setMyEmail(e.target.value)}></TextInput>
        </View>
        <View>

      <TextInput placeholder="Password" style={styles.input} value={myPassword}
          onChange={(e) => setMyPassword(e.target.value)}></TextInput>
        </View>
      <AccessButton buttonTitle='Log In' onPress={login}/>
      <Text style={styles.myText}>Not a member yet? Register now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  kitty: {
    width: 270,
    
    height: 269,
    marginLeft: 74,
    marginTop: 25,
    marginBottom: 25,
  },
  input: {
    fontSize:18,
    // backgroundColor:'red',
    // flex:0.8,
    height: 55,
    width: 294,
    borderRadius: 8,
    borderWidth: 1,
    borderColor:'#e5e5e5',
    marginTop: 0,
    marginLeft: 33,
    padding: 15,
    marginBottom: 10,
  },
  myText: {
    textAlign:'center',
      color:'#CAC8C8',
      padding:10
  },
});

export default LogIn;
