import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lessons from '../components/courses/Lessons';
import Header from '../components/header/Header';

const DATA = [
  { id: '1', title: 'Màn hình chính' },
  { id: '2', title: 'Các khóa học' },
];

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