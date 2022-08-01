import { Text, View, Image, StyleSheet, TextInput,ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import Checkbox from "react-native-checkbox-animated";
import AccessButton from "../Component/AccessButton";
import Logo from "../Component/Logo";

function SignUp({ navigation }) {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user_type, setUser_type] = useState("");
  // const [userImage, setUserImage] = useState("");

  const handleSubmitSignup = () => {
    const data = {
      full_name: fullName,
      email: email,
      password: password,
      phone_number: phoneNumber,
      // image:userImage,
      user_type: checked ? "1" : "0",
    };
    axios({
      method: "POST",
      data,
      url: "http://192.168.1.4:5000/user/register",
    })
      .then((res) => {
        console.log(res);
        navigation.navigate("LogIn");
      })
      .catch((error) => console.log(error));
  };

  const handleFullNameChange = (value) => {
    setFullname(value)
  }

  const handleEmailChange = (value) => {
    setEmail(value)
  }

  const handlePasswordChange = (value) => {
    setPassword(value)
  }

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value)
  }
  const [checked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>

      <Logo />
      <Image
        source={require("../../assets/signup-doggy.png")}
        style={styles.dog}
      />

      <TextInput
        placeholder="Full name"
        style={styles.input}
        value={fullName}
        onChangeText={handleFullNameChange}
      ></TextInput>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
      ></TextInput>

      <TextInput
      secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
      ></TextInput>

      <TextInput
        placeholder="Phone number"
        style={styles.input}
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      ></TextInput>
      <Checkbox
        label="Are you a Vet ?"
        onValueChange={(val) => setChecked(val)}
        checked={checked}
      />
      <AccessButton buttonTitle="Sign Up" handlePress={handleSubmitSignup} />

      <Text style={styles.member} onPress={() => navigation.navigate("LogIn")}>
        Already have an account?
      </Text>
      </ScrollView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dog: {
    width: 290,
    height: 176,
    marginTop: 5,
    alignSelf: "center",
  },
  input: {
    fontSize: 18,
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    marginTop: 0,
    padding: 15,
    marginBottom: 5,
  },
  member: {
    textAlign: "center",
    color: "#CAC8C8",
    padding: 5,
  },
});

export default SignUp;
