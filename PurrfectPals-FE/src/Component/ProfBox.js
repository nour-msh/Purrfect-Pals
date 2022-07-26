import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

function ProfBox(props) {
  const [posts, setPosts] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const handleModalVisibility = () => setVisible(() => !isVisible);

  const [petName, setPetName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitPost = () => {
    const data = {
      pet_name: petName,
      duration: duration,
      description: description,
    };
    axios({
      method: "POST",
      data,
      url: "http://192.168.1.6:5000/user/addPost",
    })
      .then((res) => {
        console.log(res);
        setPosts([...posts, res.data]);
        setVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const handlePetNameChange = (value) => {
    setPetName(value);
  };
  const handleDurationChange = (value) => {
    setDuration(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <View style={styles.profBox}>
      {/* <TouchableOpacity style={styles.addPet}>
        <Text style={styles.add} onPress={handleModalVisibility}>
          +
        </Text>
      </TouchableOpacity> */}
      <Text style={styles.name} onPress={handleModalVisibility}>{props.name}</Text>
      <Text style={styles.petType}>{props.petType}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setVisible(!isVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <MaterialIcons
                onPress={() => setVisible(!isVisible)}
                style={styles.close}
                name="close"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.modalText}
                placeholder="Add Pet Name"
                value={petName}
                onChangeText={handlePetNameChange}
              ></TextInput>
              <TextInput
                style={styles.modalText}
                placeholder="Add duration"
                value={duration}
                onChangeText={handleDurationChange}
              ></TextInput>
              <TextInput
                style={styles.modalText}
                placeholder="Add description"
                value={description}
                onChangeText={handleDescriptionChange}
              ></TextInput>
            </View>
            <Pressable style={styles.savebutton} onPress={handleSubmitPost}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  profBox: {
    width: "80%",
    height: 120,
    padding:20,
    backgroundColor: "white",
    borderRadius: 30,
    position: "absolute",
    bottom: -30,
    alignSelf: "center",
    elevation:10
  },
  addPet: {
    width: "16%",
    height: "40%",
    backgroundColor: "#FF914A",
    borderRadius: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // Top: 0,
    // right: -25,
  },
  add: {
    fontSize: 30,
    color: "white",
    fontWeight: "300",
    textAlign: "center",
  },
  name: {
    padding: 5,
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
    fontWeight: "600",
  },
  petType: {
    fontSize: 14,
    color: "grey",
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
    width:'80%',
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
  close: {
    alignSelf: "flex-end",
    right:-80,
    top:-20
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

export default ProfBox;
