import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header/Header';

const StudyMode = ({ route, navigation }) => {
  const { wordsToCheck } = route.params;   // Nhận từ vựng từ tham số

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionType, setQuestionType] = useState('vocabulary');
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const progress = (currentIndex / wordsToCheck.length) * 100;

  const handleNextWord = () => {
    if (currentIndex < wordsToCheck.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
      const randomType = Math.random() < 0.33 ? 'vocabulary' : Math.random() < 0.66 ? 'pronunciation' : 'listenAndChoose';
      setQuestionType(randomType);
    } else {
      navigation.goBack();
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswerChecked(true);

    if (answer === wordsToCheck[currentIndex].word) {
      setCorrectAnswer(answer);
      alert('Correct!');
    } else {
      setCorrectAnswer(wordsToCheck[currentIndex].word);
      alert('Incorrect. Try again!');
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === wordsToCheck[currentIndex].word) {
      setCorrectAnswer(selectedAnswer);
      alert('Correct!');
      // Cập nhật giai đoạn của từ vựng nếu câu trả lời đúng
      const updatedWords = [...wordsToCheck];
      updatedWords[currentIndex].stage += 1; // Tăng giai đoạn lên 1
      // Cập nhật từ vựng với giai đoạn mới
      route.params.updateWords(updatedWords); // Giả sử có một hàm để cập nhật từ vựng ở component cha
    } else {
      setCorrectAnswer(wordsToCheck[currentIndex].word);
      alert('Incorrect. Try again!');
    }
    setIsAnswerChecked(true);
  };

  const getRandomAnswers = (correctAnswer) => {
    // Lấy tất cả các từ khác ngoài từ đúng
    const incorrectAnswers = wordsToCheck
      .filter(item => item.word !== correctAnswer)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3) // Lấy 3 từ ngẫu nhiên khác
      .map(item => item.word);

    // Tạo danh sách các câu trả lời bao gồm câu trả lời đúng và các câu trả lời sai
    const answers = [correctAnswer, ...incorrectAnswers];

    // Xáo trộn danh sách câu trả lời
    return answers.sort(() => 0.5 - Math.random());
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
      <Header/>
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.title}>TỪ VỰNG LISTENING TOEIC - TOEIC TRAINING VOCAQUEST</Text>
        </View>
        <View style={styles.progressSection}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.quizContainer}>
          {questionType === 'vocabulary' && (
            <>
              <Text style={styles.questionText}>{wordsToCheck[currentIndex].meaning}</Text>
              <Text style={styles.typeText}>{wordsToCheck[currentIndex].type}</Text>
              {getRandomAnswers(wordsToCheck[currentIndex].word).map((answer, index) => (
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
                  <Text style={styles.typeText}>{wordsToCheck[currentIndex].type}</Text>
                </View>
                <View style={styles.answerContainer}>
                  {getRandomAnswers(wordsToCheck[currentIndex].word).map((answer, index) => (
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
                  <Text style={styles.typeText}>{wordsToCheck[currentIndex].type}</Text>
                </View>
                <View style={styles.answerContainer}>
                  {getRandomAnswers(wordsToCheck[currentIndex].meaning).map((answer, index) => (
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
     backgroundColor: '#F87B7A',
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
                   