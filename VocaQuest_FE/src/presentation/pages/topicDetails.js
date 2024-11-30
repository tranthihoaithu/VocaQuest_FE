import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/header/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Make sure to import axios
import {API_URL} from '@env';

const TopicDetails = ({ route, navigation }) => {
  const { topic_id } = route.params; // Get topic_id from route params

  const [topic, setTopic] = useState({});
  const [words, setWords] = useState([]); // Initializing words state
  const [currentLesson, setCurrentLesson] = useState(1);
  const [showOptions, setShowOptions] = useState(false); // For toggling settings options
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option

  // Fetch topic and vocabulary data when the component mounts
  useEffect(() => {
    axios
      .get(`${API_URL}/topics/${topic_id}/`)
      // .get(`http://127.0.0.1:8000/topics/${topic_id}/`)
      
      .then((response) => {
        setTopic(response.data.topic); // Set topic data
        setWords(response.data.vocabularies); // Set vocabularies for the topic
      })
      .catch((error) => {
        console.error('Error fetching lesson details:', error);
      });
  }, [topic_id]);

  // Navigation handlers for the lessons
  const handlePrev = () => {
    if (topic_id > 1) { // Ensure we don't go below 1
      navigation.replace('TopicDetails', { topic_id: topic_id - 1 }); // Update topic_id to previous
    }
    
  };

  const handleNext = () => {
    navigation.replace('TopicDetails', { topic_id: topic_id + 1 }); // Update topic_id to next
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    if (option === 'Ôn Tập') {
      navigation.navigate('FillTest',{topic_id: topic_id});
      console.log('id topic:', topic_id);
    } else if (option === 'Bắt đầu lại') {
      setCurrentLesson(1); // Reset to the first lesson when restarting
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container2}>
        {/* Topic Title Section */}
        <View style={styles.section}>
          <Text style={styles.title}>{topic.name}</Text>
          <Text style={styles.subtitle}>Từ vựng Listening Toeic tại VocaQuest</Text>
        </View>

        {/* Lesson Navigation Section */}
        <View style={styles.lessonContainer}>
          <View style={styles.lesson}>
            <TouchableOpacity onPress={handlePrev} style={styles.button}>
              <Text style={styles.buttonText}>{topic_id > 1 ? 'Trở lại' : 'Hết'}</Text>
            </TouchableOpacity>
            <View style={styles.lessonContent}>
              <Text style={styles.lessonTitle}>{topic.name}</Text>
            </View>
            <TouchableOpacity onPress={handleNext} style={styles.button}>
              <Text style={styles.buttonText}>{'Tiếp theo'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Options Button */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => setShowOptions(!showOptions)} style={styles.optionButton}>
            <Icon name="settings" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.optionButtonText}>Setting</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('VocabularyLearning', {topic_id: topic_id})} style={[styles.optionButton, styles.leftButton]}>
              <Icon name="book" size={20} color="#fff" style={styles.icon} />
              <Text style={styles.optionButtonText}>Học từ vựng</Text>
          </TouchableOpacity>
        </View>


        {/* Options Menu */}
        {showOptions && (
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionClick('Ôn Tập')}>
              <Text style={styles.optionText}>Ôn Tập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleOptionClick('Bắt đầu lại')}>
              <Text style={styles.optionText}>Bắt đầu lại</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Vocabulary List */}
        <ScrollView style={styles.wordList}>
          {words.length > 0 ? (
            words.map((word) => (
              <View style={styles.wordItem} key={word.id}>
                <Text style={styles.word}>{word.word}</Text>
                <Text style={styles.translation}>{word.meaning}</Text>
                <Text style={styles.translation}>{word.stage}</Text>
            
              </View>
            ))
          ) : (
            <Text style={styles.noWords}>No vocabulary available for this topic.</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
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
  lessonContainer: {
    marginTop: 20,
  },
  lesson: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  button: {
    backgroundColor: '#FD823E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  lessonContent: {
    flex: 1,
    alignItems: 'center',
  },
  lessonTitle: {
    fontSize: 18,
    color: '#333',
  },
  wordList: {
    marginTop: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 15,
  },
  wordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  word: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  translation: {
    fontSize: 16,
    color: '#777',
    flex: 1,
  },
  noWords: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    padding: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FD823E',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  icon: {
    marginRight: 8,
  },
  optionButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  optionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    position: 'absolute',
    top: 270,
    left: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 99,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#E5E5E5',
    marginBottom: 10,
    borderRadius: 5,
  },
  optionText: {
    color: '#333',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  leftButton: {
    flex: 1,
    marginRight: 10,
  },
  rightButton: {
    flex: 1,
    marginLeft: 10,
  },
});

export default TopicDetails;
