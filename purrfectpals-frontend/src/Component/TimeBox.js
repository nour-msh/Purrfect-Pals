import { StyleSheet, View, Text } from "react-native";

function TimeBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{props.info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
export default TimeBox;

