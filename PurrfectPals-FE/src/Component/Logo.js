import { StyleSheet, Text, View, Image } from "react-native";
function Logo() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "row",
        },
      ]}
    >
      <Image
        source={require("../../assets/Purr-Logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Purrfect Pals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontWeight: "300",
    fontSize: 26,
    textAlign: "center",
  },
  logo: {
    width: 35,
    height: 35,
    alignItems: "center",
  },
});

export default Logo;
