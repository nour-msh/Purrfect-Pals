import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AccessButton from "../Component/AccessButton";
import axios from "axios";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { UserContext } from "../../App";
function EditProfile({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { id_token } = useContext(UserContext);

  const handleUpdate = async () => {
    const data = {
      full_name: fullName,
      email: email,
      phone_number: phoneNumber,
    };
    await axios({
        method: "PUT",
        data,
        url: `http://192.168.1.8:5000/user/updateUserProfile/${id_token}`,
    }).then((response) => {
        console.log('1')
      console.log(response);
    });
  };

  const handleFullNameChange = (value) => {
    setFullName(value);
  };
  const handleNumberChange = (value) => {
    setPhoneNumber(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.editIcon}
        name="chevron-back-outline"
        size={24}
        color="#FF914A"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.profContainer}>
        <Image
          source={require("../../assets/profile-pic.jpeg")}
          style={styles.profPic}
        />
        <Text style={styles.name}>Change Profile Photo</Text>
      </View>
      <View>
        <Text style={styles.info}>My Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={handleFullNameChange}
        ></TextInput>

        <Text style={styles.info}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={handleNumberChange}
        ></TextInput>

        <Text style={styles.info}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={handleEmailChange}
        ></TextInput>

        <Text style={styles.map}>Edit on map</Text>
      </View>
      <TouchableOpacity
      style={styles.saveButton}
        onPress={handleUpdate}>
          <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems:'center'
    padding: 40,
  },
  profContainer: {
    display: "flex",
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
    // backgroundColor:'#FF914A',
    // height:261,
    // width:360
  },
  editIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profPic: {
    width: 135,
    height: 135,
    borderRadius: 100,
  },
  name: {
    textAlign: "center",
    padding: 10,
    color: "#008080",
  },
  info: {
    // padding:20,
    color: "#808080",
    marginBottom: 25,
  },
  saveButton:{
    height: 55,
    borderRadius: 8,
    backgroundColor: "#FF914A",
  },
  saveButtonText:{
    color: "white",
    fontSize: 18,
    padding: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  map: {
    fontSize: 13,
    color: "#008080",
    textDecorationLine: "underline",
    textAlign: "center",
    padding: 30,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default EditProfile;
