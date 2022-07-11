import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import AccessButton from "../Component/AccessButton";
import Logo from "../Component/Logo";

function LogIn() {
  return (
    <View>
      <Logo />
      <Image
        source={require("../../assets/login-kitty.png")}
        style={styles.kitty}
      />
      <TextInput placeholder="Email" style={styles.input}></TextInput>
      <TextInput placeholder="Password" style={styles.input}></TextInput>
      <AccessButton buttonTitle='Log In'/>
      <Text style={styles.myText}>I’ve missed {"\n"} you.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kitty: {
    width: 270,
    height: 269,
    marginLeft: 74,
    marginTop: 25,
    marginBottom: 25,
  },
  input: {
    fontSize:18,
    height: 55,
    width: 294,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'#808080',
    marginTop: 0,
    marginLeft: 33,
    padding: 15,
    marginBottom: 10,
  },
  myText: {
    fontSize: 26,
    marginLeft: 33,
    marginTop: 10,
  },
});

export default LogIn;
