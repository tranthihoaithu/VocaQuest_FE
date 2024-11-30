import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Header from '../components/header/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { API_URL } from '@env';

const LessonDetails = ({ route, navigation }) => {
  const { lesson_id } = route.params;
  const [lesson, setLesson] = useState({});
  const [topics, setTopics] = useState([]);
  const [progress, setProgress] = useState(0.5);
  const [wordsLearned, setWordsLearned] = useState(10);
  const [totalWords, setTotalWords] = useState(20);
  useEffect(() => {
    axios
      .get(`${API_URL}/lessons/${lesson_id}/`)
      .then((response) => {
        setTopics(response.data.topics);
      })
      .catch((error) => {
        console.error('Error fetching lesson details:', error);
      });
  }, [lesson_id]);

  const ListHeader = () => (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>{lesson.title || 'Lesson Title'}</Text>
        <Text style={styles.subtitle}>Từ vựng Listening Toeic tại VocaQuest</Text>
      </View>

      <View style={styles.statusBar}>
        <Text style={styles.statusText}>
          Đã học {wordsLearned}/{totalWords} từ
        </Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>
      </View>

      <View style={styles.reviewSection}>
        <View style={styles.iconContainer}>
          <Icon style={styles.buttonText} size={20} name="watch" />
        </View>
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.buttonText}>Ôn tập</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderCourse = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.lesson} 
        onPress={() => navigation.navigate('TopicDetails', {topic_id: item.id})}
      >
        <Text style={styles.lessonTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={topics}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 20,
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
  lesson: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  lessonTitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default LessonDetails;