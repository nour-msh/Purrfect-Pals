import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function Stacks() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    );
  }

export default Stacks
