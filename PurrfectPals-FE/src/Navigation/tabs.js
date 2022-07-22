import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../Screens/Feed';
import Profile from '../Screens/Profile';
import VetProfile from "../Screens/VetProfile";
import PetProfile from "../Screens/PetProfile";
import EditProfile from '../Screens/EditProfile';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Messages from '../Screens/Messages';

const Tab= createBottomTabNavigator();
const Stack = createStackNavigator();

function Stacks() {
    return (
      <Stack.Navigator  initialRouteName="LogIn" screenOptions={{headerShown:false}} >
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="VetProfile" component={VetProfile}/>
        <Stack.Screen name="PetProfile" component={PetProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Tabs" component={Tabs} />


      </Stack.Navigator>
    );
  }
function Tabs() {
    return (
      <Tab.Navigator 
      
      initialRouteName="Feed"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#FF914A',
      }}
    >
        <Tab.Screen name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        {/* <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}/> */}
        <Tab.Screen name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    );
  }

export default Stacks