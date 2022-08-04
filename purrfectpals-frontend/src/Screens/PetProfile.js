import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import ProfBox from "../Component/ProfBox";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { UserContext } from "../../App";

function PetProfile({ route, navigation}) {


  const [isReviewModalVisible, setReviewModalVisible] = useState(false);
  const handleReviewModal = () =>
    setReviewModalVisible(() => !isReviewModalVisible);
  const [reviewText, setReviewText] = useState("");

  const [reviews, setReviews] = useState([]);
  const { userId, userFullName ,userImage} = useContext(UserContext);
  const { data } = route.params;

  useEffect(() => {

    axios({
      method: "GET",
      url: `http://192.168.1.4:5000/pet/getAllReviewsByPetId/${data?.petId}`,
    })
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
      });
  }, []);

  const data2 = data;
  const handleSubmitReview = () => {
    const data = {
      content: reviewText,
    };
    axios({
      method: "POST",
      data,
      url: `http://192.168.1.4:5000/pet/addReview/${userId}/${data2?.petId}`,
    })
      .then((res) => {
        setReviews([...reviews, res?.data]);
        setReviewModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  const handleReviewChange = (value) => {
    setReviewText(value);
  };
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Ionicons
            style={styles.back}
            name="chevron-back-outline"
            size={24}
            color="#FF914A"
            onPress={() => navigation.goBack()}
          />
          <Image source={{ uri: data.petImage }} style={styles.petProfilePic} />
        </View>
        <ProfBox
          name={data?.petName}
          petType={data?.petBreed}
          petImage={data?.petImage}
        />
        {reviews.map((review) => {
          return (
            <View style={styles.profContainer}>
              <View style={styles.infoContainer}>
                <Image
                  source={{ uri: userImage }}
                  style={styles.profImg}
                />
                <View style={{ flex: 0.06 }} />
                <Text>{userFullName}</Text>
              </View>
              <View style={styles.review}>
                <Text key={review?._id}>{review?.content}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={styles.addReviewButton}
        onPress={handleReviewModal}
      >
        <Text style={styles.addReviewButtonText}>Add Review</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isReviewModalVisible}
        onRequestClose={() => {
          setReviewModalVisible(!isReviewModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <MaterialIcons
                onPress={() => setReviewModalVisible(!isReviewModalVisible)}
                style={styles.close}
                name="close"
                size={24}
                color="black"
              />
            </View>
            <View>
              <TextInput
                style={styles.modalText}
                placeholder="Add Review"
                value={reviewText}
                onChangeText={handleReviewChange}
              ></TextInput>
            </View>
            <Pressable style={styles.addButton} onPress={handleSubmitReview}>
              <Text style={styles.addText}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 360,
  },
  back: {
    position: "absolute",
    zIndex: 1,
    left: 20,
    top: 20,
  },
  petProfilePic: {
    width: "100%",
    // flex:1,
    height: 360,
  },
  profContainer: {
    padding: 20,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#dddddd",
    marginBottom: 10,
    top: -50,
    width: "95%",
    alignSelf: "center",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  profImg: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },

  addReviewButton: {
    width: "50%",
    height: 63,
    backgroundColor: "#FF914A",
    position: "absolute",
    top: 620,
    opacity: 1,
    borderRadius: 20,
    padding: 20,
    alignSelf: "center",
  },
  addReviewButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
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
  close: {
    alignSelf: "flex-end",
    right: -110,
    top: -20,
  },
  addButton: {
    backgroundColor: "transparent",
  },
  addText: {
    color: "#FF914A",
    textDecorationLine: "underline",
  },
  modalText: {
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
});

export default PetProfile;
