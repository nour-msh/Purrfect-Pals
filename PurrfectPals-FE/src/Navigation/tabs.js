import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../Screens/Feed';
import Profile from '../Screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Messages from '../Screens/Messages';
// import Notifications from '../Screens/Notifications'

const Tab= createBottomTabNavigator();

function Tabs() {
    return (
      <Tab.Navigator 
      initialRouteName="Feed"
      screenOptions={{
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

export default Tabs