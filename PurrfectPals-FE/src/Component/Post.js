import { View, Text, StyleSheet, Image } from "react-native";

function Post({ nav, petId,duration,description,pet_name }) {
  return (
    <View style={styles.Container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/dog1.jpeg")} style={styles.dog1} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name} onPress={()=>nav.navigate("PetProfile", {data: {petId: petId}})}>
          {pet_name}
        </Text>
        <Text style={styles.duration}>{duration}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  dog1: {
    width: 150,
    height: 178,
    borderRadius:20
  },
  textContainer: {
    // width: 143,
    flex:0.9,
    height: 150,
    top:15,
    backgroundColor: "white",
    borderLeftColor: "white",
    borderRightColor: "#e5e5e5",
    borderBottomColor: "#e5e5e5",
    borderTopColor: "#e5e5e5",
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  name: {
    fontSize: 24,
  },
  duration: {
    fontSize: 15,
    color: "#808080",
    fontWeight: "300",
  },
  description: {
    fontSize: 15,
    color: "#808080",
    fontWeight: "100",
  },
});

export default Post;
