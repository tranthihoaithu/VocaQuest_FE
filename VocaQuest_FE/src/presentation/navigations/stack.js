import { createStackNavigator } from '@react-navigation/stack';
import Courses from '../pages/courses';
import Starting from '../pages/starting';
import SplashScreen from '../pages/splash-screen';
import LogIn from '../pages/login';
import Topics from '../pages/topics';
import TopicDetails from '../pages/topicDetails';
import Learning from '../pages/learning';
import VocabularyLearning from '../pages/vocabularyLearning';
import StudyMode from '../pages/studyMode';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Starting" component={Starting} options={{ headerShown: false }} />
      <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
      <Stack.Screen name="Courses" component={Courses} options={{ headerShown: false }} />
      <Stack.Screen name="Topics" component={Topics} options={{ headerShown: false }} />
      <Stack.Screen name="TopicDetails" component={TopicDetails} options={{ headerShown: false }} />
      <Stack.Screen name="Learning" component={Learning} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="VocabularyLearning" component={VocabularyLearning} options={{ headerShown: false }} /> */}
      <Stack.Screen name="StudyMode" component={StudyMode} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};