import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/header/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Topics = () => {
  const navigation = useNavigation();
  const wordsLearned = 100;
  const totalWords = 900;
  const progress = wordsLearned / totalWords;

  // Define the array of lessons
  const lessons = [
    { id: 1, title: 'Part 1 - Hành động mắt', image: require('../../images/avatar-den-1_051422423.png') },
    { id: 2, title: 'Part 2 - Hành động tai', image: require('../../images/avatar-den-1_051422423.png') },
    { id: 3, title: 'Part 3 - Hành động miệng', image: require('../../images/avatar-den-1_051422423.png') },
    { id: 4, title: 'Part 4 - Hành động tay', image: require('../../images/avatar-den-1_051422423.png') },
    { id: 5, title: 'Part 5 - Hành động tay', image: require('../../images/avatar-den-1_051422423.png') },
    { id: 6, title: 'Part 6 - Hành động tay', image: require('../../images/avatar-den-1_051422423.png') },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container2}>
        {/* Bắt đầu */}
        <View style={styles.section}>
          <Text style={styles.title}>TỪ VỰNG LISTENING TOEIC - TOEIC TRANNING VOCAQUEST</Text>
          <Text style={styles.subtitle}>Từ vựng Listening Toeic tại VocaQuest</Text>
        </View>

        {/* Thanh trạng thái */}
        <View style={styles.statusBar}>
          <Text style={styles.statusText}>
            Đã học {wordsLearned}/{totalWords} từ
          </Text>
          {/* thanh tiến độ */}
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
          </View>
        </View>

        {/* Ôn tập */}
        <View style={styles.reviewSection}>
          <View style={styles.iconContainer}>
            <Icon name="clock" size={20} style={styles.buttonText} />
          </View>
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.buttonText}>Ôn tập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lessonContainer}>
          {lessons.map((lesson) => (
            <TouchableOpacity key={lesson.id} style={styles.lesson} onPress={() => navigation.navigate('TopicDetails')}>
              <Image source={lesson.image} style={styles.lessonImage} />
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow ScrollView to take full height
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1, // Allow content to take up full height
    padding: 20,
    backgroundColor: '#fff',
},
  section: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: '#666',
  },
  statusBar: {
    marginBottom: 20,
    backgroundColor: '#FD823E',
    padding: 10,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 16,
    color: '#fff',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  reviewSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 10,
    backgroundColor: '#FD823E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  reviewButton: {
    backgroundColor: '#FD823E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  lessonContainer: {
    marginTop: 20,
  },
  lesson: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  lessonImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  lessonTitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default Topics;