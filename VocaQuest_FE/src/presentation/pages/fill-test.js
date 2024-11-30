import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/header/Header';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const FillTest = ({ route, navigation }) => {
  const { wordsToCheck } = route.params; // nhận từ vựng từ tham số
  

  const [answer, setAnswer] = useState('');
  const [availableLetters, setAvailableLetters] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (wordsToCheck.length > 0) {
      const lettersFromWord = wordsToCheck[currentWordIndex].word.split('');
      const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split('')
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      const mixedLetters = shuffleArray([...lettersFromWord, ...randomLetters]);
      setAvailableLetters(mixedLetters);
    }
  }, [currentWordIndex, wordsToCheck]);

  const handleLetterClick = (letter, index) => {
    setAnswer((prevAnswer) => prevAnswer + letter);
    setAvailableLetters((prevLetters) => prevLetters.filter((_, i) => i !== index));
  };

  const handleBackspace = () => {
    if (answer.length > 0) {
      const lastLetter = answer[answer.length - 1];
      setAnswer((prevAnswer) => prevAnswer.slice(0, -1));
      setAvailableLetters((prevLetters) => [...prevLetters, lastLetter]);
    }
  };

  const handleCheckAnswer = () => {
    if (answer.toLowerCase() === wordsToCheck[currentWordIndex].word.toLowerCase()) {
      alert('Chúc mừng! Bạn đã nhập đúng!');
      setIsChecked(true);
    } else {
      alert('Câu trả lời chưa chính xác. Hãy thử lại!');
    }
  };

  const handleIDontKnow = () => {
    alert(`Đáp án là: ${wordsToCheck[currentWordIndex].word}`);
    handleNextWord();
  };

  const handleNextWord = () => {
    setAnswer('');
    setIsChecked(false);
    if (currentWordIndex < wordsToCheck.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.container2}>
        {wordsToCheck.length > 0 ? (
          <>
            <View style={styles.vocabularySection}>
              <Text style={styles.title1}>{wordsToCheck[currentWordIndex].meaning}</Text>
              <Text style={styles.pronunciation}>({wordsToCheck[currentWordIndex].pronunciation})</Text>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.title2}>English</Text>
              <TextInput style={styles.input} placeholder="Nhập từ của bạn ở đây" value={answer} editable={false} />
              <TouchableOpacity style={styles.button} onPress={handleBackspace}>
                <Text style={styles.buttonText}>Xóa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hintSection}>
              <Text style={styles.hintTitle}>Gợi ý</Text>
              <View style={styles.hintWordsContainer}>
                {availableLetters.map((letter, index) => (
                  <TouchableOpacity key={index} style={styles.hintLetter} onPress={() => handleLetterClick(letter, index)}>
                    <Text style={styles.hintLetterText}>{letter}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={answer.length === wordsToCheck[currentWordIndex].word.length ? handleCheckAnswer : handleIDontKnow}
            >
              <Text style={styles.buttonText}>{answer.length === wordsToCheck[currentWordIndex].word.length ? 'Kiểm tra' : 'Tôi không biết'}</Text>
            </TouchableOpacity>
            {isChecked && (
              <TouchableOpacity style={styles.button} onPress={handleNextWord}>
                <Text style={styles.buttonText}>Tiếp theo</Text>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <Text>Đang tải từ vựng...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  vocabularySection: {
    marginBottom: 20,
  },
  title0: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  title1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 10,
  },
  partOfSpeech: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
  },
  inputSection: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FD823E',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    color: '#1e3a8a',
  },
  hintSection: {
    marginVertical: 20,
  },
  hintTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
  },
  hintWordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hintLetter: {
    margin: 4,
    width: 50,
    height: 50,
    padding: 12,
    backgroundColor: '#FD823E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintLetterText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#1e3a8a',
  },
  button: {
    backgroundColor: '#FD823E',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FillTest;
