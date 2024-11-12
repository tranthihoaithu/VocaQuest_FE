import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/header/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const StudyMode = () => {
  const vocabularyList = [
    { id: '1', english: 'Apple', vietnamese: 'Táo', pronunciation: '/ˈæpl/', type: 'V' },
    { id: '2', english: 'Book', vietnamese: 'Sách', pronunciation: '/bʊk/', type: 'ADJ' },
    { id: '3', english: 'Run', vietnamese: 'Chạy', pronunciation: '/rʌn/', type: 'V' },
    { id: '4', english: 'Happy', vietnamese: 'Vui', pronunciation: '/ˈhæpi/', type: 'ADJ' },
    { id: '5', english: 'Fast', vietnamese: 'Nhanh', pronunciation: '/fæst/', type: 'A' },
    { id: '6', english: 'Study', vietnamese: 'Học', pronunciation: '/ˈstʌdi/', type: 'V' },
    { id: '7', english: 'Big', vietnamese: 'Lớn', pronunciation: '/bɪɡ/', type: 'ADJ' },
    { id: '8', english: 'Quick', vietnamese: 'Nhanh', pronunciation: '/kwɪk/', type: 'ADJ' },
    { id: '9', english: 'Food', vietnamese: 'Thức ăn', pronunciation: '/fuːd/', type: 'N' },
    { id: '10', english: 'Chair', vietnamese: 'Cái ghế', pronunciation: '/tʃɛr/', type: 'N' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionType, setQuestionType] = useState('vocabulary');
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const progress = (currentIndex / vocabularyList.length) * 100;

  const handleNextWord = () => {
    if (currentIndex < vocabularyList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
      const randomType = Math.random() < 0.33 ? 'vocabulary' : Math.random() < 0.66 ? 'pronunciation' : 'listenAndChoose';
      setQuestionType(randomType);
    } else {
      alert('You have completed the vocabulary list!');
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswerChecked(true);

    if (answer === vocabularyList[currentIndex].english) {
      setCorrectAnswer(answer);
      alert('Correct!');
    } else {
      setCorrectAnswer(vocabularyList[currentIndex].english);
      alert('Incorrect. Try again!');
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === vocabularyList[currentIndex].english) {
      setCorrectAnswer(selectedAnswer);
      alert('Correct!');
    } else {
      setCorrectAnswer(vocabularyList[currentIndex].english);
      alert('Incorrect. Try again!');
    }
    setIsAnswerChecked(true);
  };

  const getRandomAnswers = (correctAnswer) => {
    const shuffled = [...vocabularyList]
      .sort(() => 0.5 - Math.random())
      .map((item) => item.english)
      .slice(0, 4);
    if (!shuffled.includes(correctAnswer)) {
      shuffled.pop();
      shuffled.push(correctAnswer);
    }
return shuffled.sort(() => 0.5 - Math.random());
  };

  const getButtonStyle = (answer) => {
    if (!isAnswerChecked) {
      return styles.answerButton;
    }
    if (answer === correctAnswer) {
      return [styles.answerButton, styles.correctAnswer];
    }
    if (answer === selectedAnswer && answer !== correctAnswer) {
      return [styles.answerButton, styles.incorrectAnswer];
    }
    return styles.answerButton;
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        {/* Title Section */}
        <View style={styles.section}>
          <Text style={styles.title}>TỪ VỰNG LISTENING TOEIC - TOEIC TRAINING VOCAQUEST</Text>
        </View>
        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.quizContainer}>
          {questionType === 'vocabulary' && (
            <>
              <Text style={styles.questionText}>{vocabularyList[currentIndex].vietnamese}</Text>
              <Text style={styles.typeText}>{vocabularyList[currentIndex].type}</Text>
              {getRandomAnswers(vocabularyList[currentIndex].english).map((answer, index) => (
                <TouchableOpacity key={index} style={getButtonStyle(answer)} onPress={() => handleAnswerSelection(answer)}>
                  <Text style={styles.answerButtonText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}
          {questionType === 'pronunciation' && (
            <>
              <View style={styles.questionContainer}>
                <View style={styles.textContainer}>
                  <View style={styles.iconContainer}>
                    <Icon name="volume-up" size={60} color="#000" />
                  </View>
                  <Text style={styles.typeText}>{vocabularyList[currentIndex].type}</Text>
                </View>
                <View style={styles.answerContainer}>
                  {getRandomAnswers(vocabularyList[currentIndex].english).map((answer, index) => (
                    <TouchableOpacity key={index} style={getButtonStyle(answer)} onPress={() => handleAnswerSelection(answer)}>
                      <Text style={styles.answerButtonText2}>{answer}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </>
          )}
          {questionType === 'listenAndChoose' && (
            <>
              <View style={styles.questionContainer}>
                <View style={styles.textContainer}>
                  <View style={styles.iconContainer}>
                    <Icon name="volume-up" size={60} color="#000" />
                  </View>
                  <Text style={styles.typeText}>{vocabularyList[currentIndex].type}</Text>
                </View>
                <View style={styles.answerContainer}>
                  {getRandomAnswers(vocabularyList[currentIndex].vietnamese).map((answer, index) => (
<TouchableOpacity key={index} style={getButtonStyle(answer)} onPress={() => handleAnswerSelection(answer)}>
                      <Text style={styles.answerButtonText2}>{answer}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleCheckAnswer}>
            <Text style={styles.buttonText}>Kiểm tra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleNextWord}>
            <Text style={styles.buttonText}>Tiếp theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressSection: {
    marginBottom: 20,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    marginTop: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 6,
  },
  quizContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  typeText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    width: 'auto',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  answerButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  correctAnswer: {
    borderWidth: 3,
    borderColor: 'green',
  },
  incorrectAnswer: {
    borderWidth: 3,
    borderColor: 'red',
  },
  answerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    marginBottom: 5,
},

  typeText2: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },

  answerContainer: {
    flexDirection: 'column',
  },

  answerButtonText2: {
    width: 200,
    margin: 5,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default StudyMode;