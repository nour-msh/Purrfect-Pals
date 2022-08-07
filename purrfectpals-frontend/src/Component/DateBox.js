import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function DateBox({info}) {
  console.warn(info);
  return (
    <View style={styles.containerDate}>
      <Text style={styles.day}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
export default DateBox;
