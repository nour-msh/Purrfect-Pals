
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useContext } from "react";
import { UserContext } from "../../App";
import { TextInput } from "react-native-gesture-handler";
import { useFonts, Chilanka_400Regular } from "@expo-google-fonts/chilanka";
import AppLoading from "expo-app-loading";

function VetProfile({ navigation }) {
  const [vetEmail, setVetEmail] = useState("");
  const [vetNumber, setVetNumber] = useState("");
  const [vetSpecialty, setVetSpecialty] = useState("");
  const [vetStory, setVetStory] = useState("");
  const [image, setImage] = useState(userImage);
  const [dateState, setValueDateState] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const { userId, userToken, userFullName, userImage } =
    useContext(UserContext);

  const handleSubmitPortfolio = () => {
    // console.warn(data);
    const data = {
      vet_email: vetEmail,
      vet_number: vetNumber,
      vet_image: image,
      vet_specialty: vetSpecialty,
      vet_story: vetStory,
      day: dateState,
      time: [value1,value2, value3, value4],
      user_id: userId,
    };
    axios({
      method: "POST",
      data: data,
      url: `http://192.168.1.4:5000/vet/addPortfolio`,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    const data2 = {
      image: image,
    };
    axios({
      method: "PUT",
      data: data2,
      url: `http://192.168.1.4:5000/user/updateUserProfile/${userId}`,
    }).then((response) => {
      console.log(response);
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.warn("you clicked me");
    }
  };

  const handleEmailChange = (value) => {
    setVetEmail(value);
  };

  const handleNumberChange = (value) => {
    setVetNumber(value);
  };
  const handleSpecialtyChange = (value) => {
    setVetSpecialty(value);
  };
  const handleStoryChange = (value) => {
    setVetStory(value);
  };
  const handleDayChange = (value) => {
    setValueDateState(value);
  };
  const handleValue1Change = (value) => {
    setValue1(value);
  };
  const handleValue2Change = (value) => {
    setValue2(value);
  };
  const handleValue3Change = (value) => {
    setValue3(value);
  };
  const handleValue4Change = (value) => {
    setValue4(value);
  };

  let [fontsLoaded] = useFonts({
    Chilanka_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profContainer}>
            <Image source={{ uri: image }} style={styles.vetPhoto} />
          </View>
          <View style={styles.help}>
            <Ionicons
              name="add"
              size={24}
              onPress={pickImage}
              color="#FF914A"
              style={styles.addImage}
            />
            <Text style={styles.drName}>Dr. {userFullName}</Text>
            <TextInput
              placeholder="My Email"
              style={styles.input}
              value={vetEmail}
              onChangeText={handleEmailChange}
            ></TextInput>
            <TextInput
              placeholder="My Phone Number"
              style={styles.input}
              value={vetNumber}
              onChangeText={handleNumberChange}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.about}>My specialty:</Text>
            <TextInput
              style={styles.about}
              value={vetSpecialty}
              onChangeText={handleSpecialtyChange}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.about}>My success story:</Text>
            <TextInput
              style={styles.about}
              value={vetStory}
              onChangeText={handleStoryChange}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.schedule}>Schedule</Text>
          </View>
          <View style={styles.dateCont}>
            <View style={styles.containerDate}>
              <TextInput
                value={dateState}
                onChangeText={handleDayChange}
                style={styles.day}
              />
            </View>
          </View>
          <Text style={styles.hours}>Visiting Hours</Text>
          <ScrollView
            horizontal={true}
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.timeCont}>
              <View style={styles.containertime}>
                <TextInput
                  onChangeText={handleValue1Change}
                  value={value1}
                  style={styles.time}
                />
                  
              
              </View>
              <View style={styles.containertime}>
                <TextInput
                  onChangeText={handleValue2Change}
                  value={value2}
                  style={styles.time}
               />
              </View>
              <View style={styles.containertime}>
                <TextInput
                  onChangeText={handleValue3Change}
                  value={value3}
                  style={styles.time}
                />
              </View>
              <View style={styles.containertime}>
                <TextInput
                  onChangeText={handleValue4Change}
                  value={value4}
                  style={styles.time}
               />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.save} onPress={handleSubmitPortfolio}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  profContainer: {
    height: 360,
    width: "100%",
    backgroundColor: "#008080",
    position: "relative",
  },
  vetPhoto: {
    width: "100%",
    flex: 1,
    height: 360,
    position: "absolute",
  },
  addImage: {
    justifyContent: "center",
    right: -250,
    top: 10,
    position: "relative",
    fontSize: 30,
  },
  drName: {
    padding: 15,
    textAlign: "center",
    fontSize: 25,
  },
  about: {
    marginLeft: 20,
    fontSize: 15,
    padding: 10,
  },
  help: {
    height: 150,
    width: "80%",
    alignSelf: "center",
    borderRadius: 30,
    top: -90,
    elevation: 3,
    backgroundColor: "white",
  },
  num: {
    textAlign: "center",
    fontSize: 20,
    color: "grey",
  },
  input: {
    textAlign: "center",
    fontSize: 10,
    color: "grey",
    // padding:10
  },
  inputContainer: {
    height: 80,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    top: -70,
    elevation: 3,
    backgroundColor: "white",
    marginBottom: 10,
  },
  schedule: {
    marginTop: -50,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  dateCont: {
    display: "flex",
    flexDirection: "row",
  },
  timeCont: {
    display: "flex",
    flexDirection: "row",
  },
  hours: {
    padding: 15,
    textAlign: "center",
    fontSize: 13,
    color: "grey",
  },
  save: {
    backgroundColor: "#FF914A",
    width: 255,
    height: 55,
    borderRadius: 30,
    padding: 14,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    // position: "relative",
  },
  saveText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 18,
  },
  containertime: {
    width: 79,
    height: 33,
    borderRadius: 13,
    backgroundColor: "white",
    marginLeft: 20,
    elevation: 5,
    marginBottom: 10,
  },
  time: {
    textAlign: "center",
    padding: 8,
    fontWeight: "100",
  },
  containerDate: {
    width: "90%",
    height: 40,
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 20,
    elevation: 5,
  },
  day: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "100",
  },
});

export default VetProfile;

