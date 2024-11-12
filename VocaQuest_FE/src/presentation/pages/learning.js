import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/header/Header';

// Function to shuffle an array (used to shuffle available letters)
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Learning = () => {
  const words = [
    { vietnamese: 'Xin chào', english: 'Hello' },
    { vietnamese: 'Cảm ơn', english: 'Thank you' },
    { vietnamese: 'Chào buổi sáng', english: 'Good morning' },
    { vietnamese: 'Chào buổi tối', english: 'Good evening' },
    { vietnamese: 'Tạm biệt', english: 'Goodbye' },
    { vietnamese: 'Vui lòng', english: 'Please' },
    { vietnamese: 'Xin lỗi', english: 'Sorry' },
    { vietnamese: 'Đúng', english: 'Right' },
    { vietnamese: 'Sai', english: 'Wrong' },
    { vietnamese: 'Mới', english: 'New' },
  ];

  const [answer, setAnswer] = useState('');
  const [availableLetters, setAvailableLetters] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)]);

  // Update available letters when the word changes
  useEffect(() => {
    // Create a pool of letters from the current word
    const lettersFromWord = currentWord.english.split('');

    // Add some random letters to make it more challenging (optional)
    const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('')
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    // Combine letters and shuffle
    const mixedLetters = shuffleArray([...lettersFromWord, ...randomLetters]);

    setAvailableLetters(mixedLetters);
  }, [currentWord]);

  const handleLetterClick = (letter, index) => {
    setAnswer((prevAnswer) => prevAnswer + letter);
    setAvailableLetters((prevLetters) => prevLetters.filter((_, i) => i !== index));
  };

  const handleBackspace = () => {
    if (answer.length > 0) {
      const lastLetter = answer[answer.length - 1];
      setAnswer((prevAnswer) => prevAnswer.slice(0, -1));
      setAvailableLetters((prevLetters) => [...prevLetters, lastLetter]); // Return letter to hints
    }
  };

  const handleCheckAnswer = () => {
    if (answer.toLowerCase() === currentWord.english.toLowerCase()) {
      alert('Chúc mừng! Bạn đã nhập đúng!');
      setIsChecked(true);
    } else {
      alert('Câu trả lời chưa chính xác. Hãy thử lại!');
    }
  };

  const handleIDontKnow = () => {
    alert('Try to learn it step by step!');
    handleNextWord();
  };

  const buttonText = answer.length === currentWord.english.length ? 'Kiểm tra' : 'Tôi không biết';

  const handleNextWord = () => {
    setAnswer('');
    setIsChecked(false);
setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      <View style={styles.container2}>
        {/* Vocabulary Section */}
        <View style={styles.vocabularySection}>
          <Text style={styles.title0}>TỪ VỰNG LISTENING TOIEC</Text>
        </View>
        <View style={styles.vocabularySection}>
          <Text style={styles.title1}>{currentWord.vietnamese}</Text>
          <Text style={styles.partOfSpeech}>N</Text>
        </View>

        {/* Input Section */}
        <View style={styles.inputSection}>
          <Text style={styles.title2}>English</Text>
          <TextInput style={styles.input} placeholder="Nhập từ của bạn ở đây" value={answer} editable={false} />
          <TouchableOpacity style={styles.button} onPress={handleBackspace}>
            <Text style={styles.buttonText}>Xóa</Text>
          </TouchableOpacity>
        </View>

        {/* Hint Section */}
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

        {/* Dynamic Button */}
        <TouchableOpacity style={styles.button} onPress={answer.length === currentWord.english.length ? handleCheckAnswer : handleIDontKnow}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        {isChecked && (
          <TouchableOpacity style={styles.button} onPress={handleNextWord}>
            <Text style={styles.buttonText}>Tiếp theo</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Styles
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
    color: '#1e3a8a', // Dark blue (matches header color)
    textAlign: 'center',
  },
  title1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a', // Dark blue (matches header color)
    textAlign: 'center',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a', // Dark blue (matches header color)
    marginBottom: 10,
  },
  partOfSpeech: {
    fontSize: 16,
    color: '#4b5563', // Slightly muted gray for the part of speech
    textAlign: 'center',
  },
  inputSection: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FD823E', // Muted border to match the subtle theme
    borderRadius: 8,
    padding: 12,
fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    color: '#1e3a8a', // Dark text color for contrast
  },
  hintSection: {
    marginVertical: 20,
  },
  hintTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a', // Dark blue to match the theme
    marginBottom: 8,
  },
  hintWordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hintLetter: {
    margin: 4,
    width: 40,
    height: 40,
    padding: 12,
    backgroundColor: '#FD823E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hintLetterText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#1e3a8a', // Dark blue for the hint letters
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

export default Learning;