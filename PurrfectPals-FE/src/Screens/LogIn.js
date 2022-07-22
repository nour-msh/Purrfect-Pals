import { NavigationHelpersContext } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
// import {jwt} from 'jsonwebtoken';

import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import AccessButton from "../Component/AccessButton";
import Logo from "../Component/Logo";

function LogIn({navigation}) {

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

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
    .then((res) => {console.log(res)})
    .catch((error) => console.log(error));
};

const handleMyEmailChange = (value) => {
  setMyEmail(value)
}

const handleMyPasswordChange = (value) => {
  setMyPassword(value)
}
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

      <TextInput placeholder="Email" style={styles.input}  value={myEmail} onChangeText={handleMyEmailChange}></TextInput>
        </View>
        <View>

      <TextInput placeholder="Password" style={styles.input}  value={myPassword} onChangeText={handleMyPasswordChange}></TextInput>
        </View>
      <AccessButton buttonTitle='Log In' handlePress={handleSubmitLogin} />
      <Text style={styles.myText} onPress={()=>navigation.navigate('SignUp')}>Not a member yet? Register now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:25
  },
  kitty: {
    width: 270,
    height: 269,
    display:'flex',
    marginTop: 25,
    marginBottom: 25,
    alignSelf:'center'

  },
  input: {
    fontSize:18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor:'#e5e5e5',
    marginTop: 0,
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
