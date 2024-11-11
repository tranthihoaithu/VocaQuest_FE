import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/presentation/navigations/stack';

export default function App() {
  return (
   <NavigationContainer>
      <HomeStack/>
   </NavigationContainer>
  );
}


