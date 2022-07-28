import { useEffect, useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../Screens/Feed";
import Profile from "../Screens/Profile";
import VetProfile from "../Screens/VetProfile";
import PetProfile from "../Screens/PetProfile";
import EditProfile from "../Screens/EditProfile";
import LogIn from "../Screens/LogIn";
import SignUp from "../Screens/SignUp";
import chatComponent from "../Screens/chatComponent";
import Maps from '../Screens/Maps';
import OnboardingItems from "../../onBoarding/OnBoardingItems";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../App";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoardingItems" component={OnboardingItems} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="VetProfile" component={VetProfile} />
      <Stack.Screen name="PetProfile" component={PetProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Maps" component={Maps}/>
    </Stack.Navigator>
  );
}

function Tabs() {
  const value_token = AsyncStorage.getItem("@id_token");

  const { id_token, toggleState } = useContext(UserContext);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    setTrigger(!trigger);
  }, [id_token]);
  return (
    <Tab.Navigator
      initialRouteName=""
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF914A",
      }}
    >
      {!value_token && (
        <Tab.Screen
          navigationOptions={{
            tabBarVisible: false,
          }}
          name="LogIn"
          component={LogIn}
        />
      )}
      {value_token && (
        <>
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="chatComponent"
            component={chatComponent}
            options={{
              tabBarLabel: "Messages",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="message"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

export default Stacks;
