import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Lessons from '../components/courses/Lessons';
import Header from '../components/header/Header';
import LogIn from './login';


const Courses = () => {
  return (
    <View style={styles.screen}>
      <Header />

      <View>
        <Lessons />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
  },
});

export default Courses;