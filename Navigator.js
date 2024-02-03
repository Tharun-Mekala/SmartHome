import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogInPage from './LogInPage';
import DashBoard from './DashBoard';
import RoomPage from './RoomPage';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogInPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={DashBoard} options={{ headerShown: false }} />
        <Stack.Screen name="Room" component={RoomPage}  
			options={{
        		headerStyle: { backgroundColor: '#010920' },
				headerTintColor: '#fff',
			}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
