import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/header/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const TopicDetails = () => {
  const navigation = useNavigation();
  const lessons = [
    {
      id: 1,
      title: 'Part 1',
      subtitle: 'Chủ đề Family',
      words: [
        { english: 'Hello', vietnamese: 'Xin chào', lastLearned: '3 days' },
        { english: 'Goodbye', vietnamese: 'Tạm biệt', lastLearned: '1 days' },
        { english: 'Thank you', vietnamese: 'Cảm ơn', lastLearned: '3 days' },
        { english: 'Please', vietnamese: 'Làm ơn', lastLearned: '7 days' },
        { english: 'Yes', vietnamese: 'Vâng', lastLearned: '3 days' },
        { english: 'No', vietnamese: 'Không', lastLearned: '3 hours' },
        { english: 'Sorry', vietnamese: 'Xin lỗi', lastLearned: '3 days' },
        { english: 'Excuse me', vietnamese: 'Xin lỗi', lastLearned: '3 hours' },
        { english: 'Good morning', vietnamese: 'Chào buổi sáng', lastLearned: '3 hours' },
        { english: 'Good night', vietnamese: 'Chúc ngủ ngon', lastLearned: '3 days' },
        { english: 'How are you?', vietnamese: 'Bạn khỏe không?', lastLearned: '3 hours' },
        { english: 'I’m fine', vietnamese: 'Tôi khỏe', lastLearned: '3 hours' },
        { english: 'What is your name?', vietnamese: 'Tên bạn là gì?', lastLearned: '3 days' },
        { english: 'My name is', vietnamese: 'Tên tôi là', lastLearned: '3 days' },
        { english: 'Where are you from?', vietnamese: 'Bạn đến từ đâu?', lastLearned: '3 hours' },
        { english: 'I am from', vietnamese: 'Tôi đến từ', lastLearned: '3 days' },
        { english: 'How old are you?', vietnamese: 'Bạn bao nhiêu tuổi?', lastLearned: '3 days' },
        { english: 'I am...', vietnamese: 'Tôi ... tuổi', lastLearned: '3 hours' },
        { english: 'Where do you live?', vietnamese: 'Bạn sống ở đâu?', lastLearned: '3 days' },
        { english: 'I live in', vietnamese: 'Tôi sống ở', lastLearned: '3 hours' },
      ],
    },
    {
      id: 2,
      title: 'Part 2',
      subtitle: ' Chủ đề Holiday',
      words: [
        { english: 'Hello', vietnamese: 'Xin chào', lastLearned: '3 days' },
        { english: 'Goodbye', vietnamese: 'Tạm biệt', lastLearned: '1 days' },
        { english: 'Thank you', vietnamese: 'Cảm ơn', lastLearned: '3 days' },
        { english: 'Please', vietnamese: 'Làm ơn', lastLearned: '7 days' },
        { english: 'Yes', vietnamese: 'Vâng', lastLearned: '3 days' },
        { english: 'No', vietnamese: 'Không', lastLearned: '3 hours' },
        { english: 'Sorry', vietnamese: 'Xin lỗi', lastLearned: '3 days' },
        { english: 'Excuse me', vietnamese: 'Xin lỗi', lastLearned: '3 hours' },
      ],
    },
    {
      id: 3,
      title: 'Part 3',
subtitle: ' Chủ đề ...',
      words: [
        { english: 'Hello', vietnamese: 'Xin chào', lastLearned: '3 days' },
        { english: 'Goodbye', vietnamese: 'Tạm biệt', lastLearned: '1 days' },
      ],
    },
    {
      id: 4,
      title: 'Part 4',
      subtitle: ' Chủ đề ...',
      words: [],
    },
  ];

  const [currentLesson, setCurrentLesson] = useState(1);
  const [showOptions, setShowOptions] = useState(false); // To toggle options visibility
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option

  const handlePrev = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const handleNext = () => {
    if (currentLesson < lessons.length) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const currentLessonContent = lessons[currentLesson - 1];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    if (option === 'Ôn Tập') {
      navigation.navigate('Learning');
    } else if (option === 'Bắt đầu lại') {
      setReviewedWords(0);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container2}>
        {/* Bắt đầu */}
        <View style={styles.section}>
          <Text style={styles.title}>TỪ VỰNG LISTENING TOEIC - TOEIC TRANNING VOCAQUEST</Text>
          <Text style={styles.subtitle}>Từ vựng Listening Toeic tại VocaQuest</Text>
        </View>

        {/* bài học */}
        <View style={styles.lessonContainer}>
          <View style={styles.lesson}>
            <TouchableOpacity onPress={handlePrev} style={styles.button}>
              <Text style={styles.buttonText}>{currentLesson > 1 ? lessons[currentLesson - 2].title : 'Hết'}</Text>
            </TouchableOpacity>

            <View style={styles.lessonContent}>
              <Text style={styles.lessonTitle}>{currentLessonContent.title}</Text>
              <Text style={styles.lessonSubtitle}>{currentLessonContent.subtitle}</Text>
            </View>

            <TouchableOpacity onPress={handleNext} style={styles.button}>
              <Text style={styles.buttonText}>{currentLesson < lessons.length ? lessons[currentLesson].title : 'Hết'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowOptions(!showOptions)} style={styles.optionButton}>
          <Icon name="settings" size={20} color="#fff" style={styles.icon} /> {/* Icon added here */}
          <Text style={styles.optionButtonText}>Setting</Text>
        </TouchableOpacity>

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
        {/* Nội dung bài học */}
        <ScrollView style={styles.wordList}>
          {currentLessonContent.words.length > 0 ? (
            currentLessonContent.words.map((word, index) => (
              <View style={styles.wordItem} key={index}>
                <Text style={styles.word}>{word.english}</Text>
                <Text style={styles.translation}>{word.vietnamese}</Text>
                <Text style={styles.learnedTime}>{word.lastLearned ? ` ${word.lastLearned}` : 'Never learned'}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noWords}>No vocabulary for this lesson</Text>
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
  learnedTime: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    textAlign: 'right',
  },
  noWords: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    padding: 20,
  },
  optionButton: {
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center them vertically
    backgroundColor: '#FD823E',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  icon: {
    marginRight: 8, // Space between icon and text
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
top: 330,
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
    paddingHorizontal: 15,
    backgroundColor: '#E5E5E5',
    marginBottom: 10,
    borderRadius: 5,
  },
  optionText: {
    color: '#333',
    fontSize: 16,
  },
  selectedOption: {
    fontSize: 16,
    color: '#FD823E',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default TopicDetails;