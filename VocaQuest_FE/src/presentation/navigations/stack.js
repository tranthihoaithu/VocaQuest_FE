import { createStackNavigator } from '@react-navigation/stack';
import Courses from '../pages/courses';
import Starting from '../pages/starting';
import SplashScreen from '../pages/splash-screen';
import LogIn from '../pages/login';


const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>  
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} /> 
      <Stack.Screen name="Starting" component={Starting} options={{headerShown: false}}/>
      <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}}/>
      <Stack.Screen name="Courses" component={Courses} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}