import { createStackNavigator } from '@react-navigation/stack';
import Courses from '../pages/courses';
import Starting from '../pages/starting';
import SplashScreen from '../pages/splash-screen';
import LogIn from '../pages/login';
import TopicDetails from '../pages/topicDetails';
import VocabularyLearning from '../pages/vocabularyLearning';
import StudyMode from '../pages/studyMode';
import LessonDetails from '../pages/lessonDetails';
import Register from '../pages/register';
import Finish from '../pages/finish';
import FillTest from '../pages/fill-test';
import Notifications from '../pages/notifications';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Starting" component={Starting} options={{ headerShown: false }} />  
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />  
      <Stack.Screen name="Courses" component={Courses} options={{ headerShown: false }} /> 
      <Stack.Screen name="LessonDetails" component={LessonDetails} options={{ headerShown: false }} />
      <Stack.Screen name="TopicDetails" component={TopicDetails} options={{ headerShown: false }} />
      <Stack.Screen name="FillTest" component={FillTest} options={{ headerShown: false }} /> 
      <Stack.Screen name="VocabularyLearning" component={VocabularyLearning} options={{ headerShown: false }} />
      <Stack.Screen name="StudyMode" component={StudyMode} options={{ headerShown: false }} /> 
      <Stack.Screen name="Finish" component={Finish} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};