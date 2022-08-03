import {
  Text,
  Modal,
  Pressable,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";

import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Pet from "../Component/Pet";

function Profile({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModal = () => setModalVisible(() => !isModalVisible);

  const [pets, setPets] = useState([]);

  const [image, setImage] = useState(null);
  const [petName, setPetname] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");

  const { userId, userToken, userFullName, userImage } =
    useContext(UserContext);

  const handleSubmitPet = () => {
    const data = {
      pet_name: petName,
      image: image,
      breed: petBreed,
      age: petAge,
    };
    axios({
      method: "POST",
      data,
      url: `http://192.168.1.4:5000/user/addPet/${userId}`,
    })
      .then((res) => {
        console.log(res);
        setPets([...pets, res.data]);
        setModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.warn(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.warn("Image Added");
    }
  };

  const handleNameChange = (value) => {
    setPetname(value);
  };

  const handleBreedChange = (value) => {
    setPetBreed(value);
  };

  const handleAgeChange = (value) => {
    setPetAge(value);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://192.168.1.4:5000/user/getPets/${userId}`,
    }).then((res) => {
      setPets(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.editIcon}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color="#FF914A"
          onPress={() => navigation.goBack()}
        />
        <AntDesign
          name="edit"
          size={24}
          color="black"
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: userImage }} style={styles.profilePic} />
          <View style={{ flex: 0.3 }} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{userFullName}</Text>
            <Text style={styles.location}>Lebanon, Beirut</Text>
          </View>
        </View>
        <View>
          {pets.map((pet) => {
            // console.warn(pet);
            return (
              <Pet
                key={pet._id}
                nav={navigation}
                petId={pet._id}
                petName={pet.pet_name}
                petAge={pet.age}
                petBreed={pet.breed}
                petImage={pet.image}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addPet} onPress={handleModal}>
        <Text style={styles.add}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <MaterialIcons
                onPress={() => setModalVisible(!isModalVisible)}
                style={styles.close}
                name="close"
                size={24}
                color="black"
              />
              <Pressable style={styles.button} onPress={pickImage}>
                <Text style={styles.textStyle}>Add Image</Text>
              </Pressable>
            </View>
            <View>
              <TextInput
                style={styles.modalText}
                placeholder="My Pet's Name"
                value={petName}
                onChangeText={handleNameChange}
              ></TextInput>
              <TextInput
                style={styles.modalText}
                placeholder="My Pet's Breed"
                value={petBreed}
                onChangeText={handleBreedChange}
              ></TextInput>
              <TextInput
                style={styles.modalText}
                placeholder="My Pet's Age"
                value={petAge}
                onChangeText={handleAgeChange}
              ></TextInput>
            </View>
            <Pressable style={styles.savebutton} onPress={handleSubmitPet}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 25,
  },
  profilePic: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  editIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  location: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "200",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  addPet: {
    width: "20%",
    height: 60,
    backgroundColor: "#FF914A",
    borderRadius: 20,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: 15,
  },
  close: {
    alignSelf: "flex-end",
    right: -80,
    top: -20,
  },
  add: {
    fontSize: 40,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: "#FF914A",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  savebutton: {
    backgroundColor: "transparent",
  },
  saveText: {
    color: "#FF914A",
    textDecorationLine: "underline",
  },
  modalText: {
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Profile;
