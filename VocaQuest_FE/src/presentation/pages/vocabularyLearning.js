import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/header/Header';

const VocabularyLearning = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const vocabularyList = [
    { id: '1', english: 'Apple', vietnamese: 'Táo', pronunciation: '/ˈæpl/', type: 'V' },
    { id: '2', english: 'Book', vietnamese: 'Sách', pronunciation: '/bʊk/', type: 'ADJ' },
    { id: '3', english: 'Run', vietnamese: 'Chạy', pronunciation: '/rʌn/', type: 'V' },
    { id: '4', english: 'Happy', vietnamese: 'Vui', pronunciation: '/ˈhæpi/', type: 'ADJ' },
    { id: '5', english: 'Fast', vietnamese: 'Nhanh', pronunciation: '/fæst/', type: 'A' },
  ];

  const progress = (vocabularyList.length / 5) * 100;
  const handleNextWord = () => {
    if (currentIndex < vocabularyList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('You have completed the vocabulary list!');
    }
  };

  const currentWord = vocabularyList[currentIndex];

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

        {/* Vocabulary Section */}
        <View style={styles.wordContainer}>
          <View style={styles.vocabRow}>
            <Text style={styles.vocabLabel}>ENGLISH:</Text>
          </View>
          <View style={styles.vocabRow}>
            <Text style={styles.vocabContent2}>{currentWord.english}</Text>
          </View>

          <View style={styles.vocabRow}>
            <Text style={styles.vocabLabel2}>VIETNAMESE:</Text>
          </View>
          <View style={styles.vocabRow}>
            <Text style={styles.vocabContent3}>{currentWord.vietnamese}</Text>
          </View>

          <View style={styles.line} />
          <View style={styles.vocabRow}>
            <Text style={styles.vocabLabel}>Từ loại:</Text>
          </View>
          <View style={styles.typeContainer}>
            <Text style={styles.pronunciation}>{currentWord.pronunciation}</Text>
            <Text style={styles.wordType}>{currentWord.type}</Text>
          </View>

          <View style={styles.line} />
          <View style={styles.vocabRow}>
            <Text style={styles.vocabLabel}>Ví dụ:</Text>
          </View>
          <View style={styles.typeContainer}>
            <Text style={styles.pronunciation}>How are you</Text>
          </View>
        </View>

        {/* Audio Section */}
<View style={styles.audioSection}>
          <Text style={styles.audioLabel}>Âm Thanh</Text>
          <TouchableOpacity style={styles.audioButton}>
            <Text style={styles.audioIcon}>🔊</Text>
          </TouchableOpacity>
        </View>

        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextWord}>
            <Text style={styles.nextButtonText}>Tiếp theo</Text>
            <Text style={styles.nextButtonIcon}>→</Text>
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
  line: {
    height: 2,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  progressSection: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#333',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  vocabSection: {
    marginBottom: 20,
  },
  vocabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  vocabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  vocabLabel2: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  vocabContent: {
    fontSize: 16,
    color: '#333',
  },
  vocabContent2: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  vocabContent3: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  vocabDetail: {
    fontSize: 16,
    color: '#777',
  },
  exampleSection: {
    marginVertical: 10,
  },
  exampleLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  exampleContent: {
    paddingLeft: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  exampleText: {
    fontSize: 15,
    color: '#444',
    marginVertical: 2,
  },
  audioSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  audioLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  audioButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
  },
  audioIcon: {
    fontSize: 18,
    color: '#333',
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  nextButtonContainer: {
    alignItems: 'center',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  nextButtonIcon: {
    fontSize: 18,
    color: '#fff',
  },

  typeContainer: {
    flexDirection: 'row',
    gap:10,
    marginVertical: 10,
    alignItems: 'center',
  },

  pronunciation: {
    fontSize: 16,
    color: '#333',
    borderBottomColor: '#ccc',
    paddingRight: 10,
  },

  wordType: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    color: 'white',
  },

  nounType: {
    backgroundColor: '#ffe0b2',
    color: '#d32f2f',
    borderColor: '#d32f2f',
  },
});

export default VocabularyLearning;