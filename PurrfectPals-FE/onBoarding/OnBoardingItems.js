import React, { useContext } from "react";
import Onboarding from "react-native-onboarding-swiper";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from "react-native";
const dot = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "#FF914A" : "#fff";
  } else {
    backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)";
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        borderRadius: 10,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};



const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16,color:'#FF914A' }}>Let's Go</Text>
  </TouchableOpacity>
);



const OnBoardingItems = ({ navigation }) => {
  const value_token = AsyncStorage.getItem("@id_token");

  return (
    <>
      {value_token !== null ? (
        <Onboarding
          DotComponent={dot}
          DoneButtonComponent={Done}
          showSkip={false}
          showNext={false}
          onDone={() => navigation.navigate("LogIn")}
          titleStyles={{ color: "#FF914A", margin: 0 , opacity:0.7}}
          subTitleStyles={{ color: "#000000" }}
          pages={[
            {
              backgroundColor: "#F3F5F8",
              image: (
                <Image
                  source={require("../assets/Purr-Logo.png")}
                  style={styles.logo}
                />
              ),
            },
            {
              backgroundColor: "#F3F5F8",
              image: (
                <Image
                  source={require("../assets/doggy-greeting.png")}
                  style={styles.doggy}
                />
              ),
              title: "Hi Pal",
              subtitle: "Pet set. Pet ready. \n Pet go!",
            },
            {
              backgroundColor: "#F3F5F8",
              image: (
                <Image
                  source={require("../assets/kitty-greeting.png")}
                  style={styles.kitty}
                />
              ),
              title: "Hi Hooman",
              subtitle: "I really wanna see you soon. \n Sign Up hooman",
            },
            {
              backgroundColor: "#F3F5F8",
              image: (
                <Image
                  source={require("../assets/cat5.png")}
                  style={styles.cat}
                />
              ),
              title: "Pal come on!",
            },
          ]}
        />
      ) : (
        <></>
      )}
    </>
  );
};


// Stylesheet
const styles = StyleSheet.create({
  topLogo: {
    width: 35,
    height: 35,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: "10%",
  },
  doggy: {
    width: 270,
    height: 300,
    marginTop: "10%",
  },
  kitty: {
    width: 270,
    height: 300,
    marginTop: "10%",
  },

  cat: {
    width: 270,
    height: 300,
    marginTop: "10%",
  },
});

export default OnBoardingItems;
