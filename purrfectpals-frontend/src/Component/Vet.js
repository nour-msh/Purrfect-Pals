import { Text, View, StyleSheet, Image } from "react-native";

function Vet({ nav, vetData }) {
  // console.warn(vetData)
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}></View>
      <View style={styles.imageContainer}>
        <Image
        source={{uri:vetData.image}}
          // source={vetData.image}
          style={styles.Doctor1}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text
          style={styles.vetName}
          onPress={() =>
            nav.navigate("VetPortfolio", { dataFromVet:  vetData })
          }
        >
          Dr. {vetData.full_name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    marginRight: 20,
  },
  upperContainer: {
    width: 162,
    height: 103,
    backgroundColor: "#FF914A",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    opacity: 0.7,
    position: "relative",
  },
  imageContainer: {
    height: 240,
    width: 162,
    backgroundColor: "none",
    position: "absolute",
  },
  Doctor1: {
    height: 153,
    width: 162,
  },
  bottomContainer: {
    width: 162,
    height: 50,
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderBottomColor: "#e5e5e5",
    borderLeftColor: "#e5e5e5",
    borderRightColor: "#e5e5e5",
    borderTopColor: "white",
  },
  vetName: {
    textAlign: "center",
    fontSize: 15,
    padding: 10,
    fontWeight: "200",
  },
});
export default Vet;
