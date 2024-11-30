import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/header/Header';
import { Audio } from 'expo-av';
import {API_URL} from '@env';
import { styles } from './styleVocaLearn';

const VocabularyLearning = ({ route, navigation }) => {
  
  const { topic_id } = route.params;
  const [vocabularyList, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sound, setSound] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: false
        });
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };

    initAudio();
  }, []);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(`${API_URL}/topics/${topic_id}/`);
        const data = await response.json();
        const vocabularies = data.vocabularies || [];
        const stageZeroWords = vocabularies.filter(word => word.stage === 0).slice(0, 5);
        setWords(stageZeroWords);
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    };

    fetchWords();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [topic_id]);

  const handleNextWord = () => {
    if (currentIndex < vocabularyList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if ((currentIndex + 1) % 2 === 0) {
        const wordsToCheck = vocabularyList.slice(currentIndex - 1, currentIndex + 1);
        navigation.navigate('FillTest', { wordsToCheck });
      }
    } else {
      // Kiểm tra từ cuối cùng nếu nó chưa được kiểm tra.
      if (currentIndex % 2 === 0) {
        const wordsToCheck = vocabularyList.slice(currentIndex, currentIndex + 1);
        navigation.navigate('StudyMode', { wordsToCheck });
      } else {
        navigation.navigate('Finish');
        Alert.alert('Notification', 'You have completed the vocabulary list!');
      }
    }
  };

  const playAudio = async (audioPath) => {
    setIsLoading(true);
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const audioUrl = `${API_URL}${audioPath}`;
      console.log('Playing audio from URL:', audioUrl);

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true },
        (status) => {
          console.log('Audio status:', status);
          if (status.didJustFinish) {
            setIsLoading(false);
          }
        },
        true
      );

      setSound(newSound);

      const result = await newSound.playAsync();
      console.log('Playback result:', result);

    } catch (error) {
      console.error('Detailed error playing audio:', error);
      Alert.alert(
        'Audio Error',
        `Unable to play audio: ${error.message}. Please check your internet connection and try again.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const currentWord = vocabularyList[currentIndex];
  const progress = vocabularyList.length > 0 ? ((currentIndex + 1) / vocabularyList.length) * 100 : 0;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.title}>TỪ VỰNG LISTENING TOEIC - TOEIC TRAINING VOCAQUEST</Text>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        {currentWord ? (
          <View style={styles.wordContainer}>
            <View style={styles.vocabRow}>
              <Text style={styles.vocabLabel}>ENGLISH:</Text>
            </View>
            <View style={styles.vocabRow}>
              <Text style={styles.vocabContent2}>{currentWord.word}</Text>
            </View>

            <View style={styles.vocabRow}>
              <Text style={styles.vocabLabel2}>VIETNAMESE:</Text>
            </View>
            <View style={styles.vocabRow}>
              <Text style={styles.vocabContent3}>{currentWord.meaning}</Text>
            </View>

            <View style={styles.line} />
            <View style={styles.vocabRow}>
              <Text style={styles.vocabLabel}>Pronunciation:</Text>
            </View>
            <View style={styles.typeContainer}>
              <Text style={styles.pronunciation}>{currentWord.pronunciation}</Text>
            </View>

            <View style={styles.line} />
            <View style={styles.vocabRow}>
              <Text style={styles.vocabLabel}>Example Sentence:</Text>
            </View>
            <View style={styles.typeContainer}>
              <Text style={styles.pronunciation}>{currentWord.example_sentence}</Text>
            </View>

            <View style={styles.audioSection}>
              <Text style={styles.audioLabel}>Audio</Text>
              <TouchableOpacity 
                style={[styles.audioButton, isLoading && styles.audioButtonDisabled]}
                onPress={() => !isLoading && playAudio(currentWord.audio)}
                disabled={isLoading}>
                <Text style={styles.audioIcon}>{isLoading ? '🔄' : '🔊'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Text style={styles.loadingText}>Loading vocabulary...</Text>
        )}

        <View style={styles.nextButtonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextWord}>
            <Text style={styles.nextButtonText}>Next</Text>
            <Text style={styles.nextButtonIcon}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



// const VocabularyLearning = ({ route, navigation }) => {
//   const { topic_id } = route.params;
//   const [vocabularyList, setWords] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [sound, setSound] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   // Initialization of Audio settings
//   useEffect(() => {
//     const initAudio = async () => {
//       try {
//         await Audio.setAudioModeAsync({
//           allowsRecordingIOS: false,
//           playsInSilentModeIOS: true,
//           shouldDuckAndroid: true,
//           staysActiveInBackground: true,
//           playThroughEarpieceAndroid: false
//         });
//       } catch (error) {
//         console.error('Error initializing audio:', error);
//       }
//     };
//     initAudio();
//   }, []);

//   // Fetch vocabulary list based on topic_id
//   useEffect(() => {
//     const fetchWords = async () => {
//       try {
//         const response = await fetch(`${API_URL}/topics/${topic_id}/`);
//         const data = await response.json();
//         const vocabularies = data.vocabularies || [];
//         // Filter out only words with stage 0
//         const stageZeroWords = vocabularies.filter(word => word.stage === 0).slice(0, 5);
//         setWords(stageZeroWords);
//       } catch (error) {
//         console.error('Error fetching words:', error);
//       }
//     };
//     fetchWords();

//     return () => {
//       if (sound) {
//         sound.unloadAsync();
//       }
//     };
//   }, [topic_id]);

//   // Handle next word transition
//   const handleNextWord = () => {
//     if (currentIndex < vocabularyList.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       if ((currentIndex + 1) % 2 === 0) {
//         const wordsToCheck = vocabularyList.slice(currentIndex - 1, currentIndex + 1);
//         navigation.navigate('StudyMode', { wordsToCheck });
//       }
//     } else {
//       // If no more words in the current set, load words with stage <= 3
//       loadStageWords();
//     }
//   };

//   // Load vocabulary with stage <= 3
//   const loadStageWords = async () => {
//     try {
//       const response = await fetch(`${API_URL}/topics/${topic_id}/`);
//       const data = await response.json();
//       const vocabularies = data.vocabularies || [];
//       const stageWords = vocabularies.filter(word => word.stage <= 3);
//       if (stageWords.length === 0) {
//         navigation.navigate('Finish');
//         Alert.alert('Notification', 'You have completed the vocabulary list!');
//       } else {
//         setWords(stageWords);
//         setCurrentIndex(0); // Reset to the first word with stage <= 3
//         navigation.navigate('StudyMode', { wordsToCheck: stageWords });
//       }
//     } catch (error) {
//       console.error('Error loading stage words:', error);
//     }
//   };

//   // Play audio for the current word
//   const playAudio = async (audioPath) => {
//     setIsLoading(true);
//     try {
//       if (sound) {
//         await sound.unloadAsync();
//       }
//       const audioUrl = `${API_URL}${audioPath}`;
//       const { sound: newSound } = await Audio.Sound.createAsync(
//         { uri: audioUrl },
//         { shouldPlay: true },
//         (status) => {
//           if (status.didJustFinish) {
//             setIsLoading(false);
//           }
//         },
//         true
//       );
//       setSound(newSound);
//       await newSound.playAsync();
//     } catch (error) {
//       console.error('Audio Error:', error);
//       Alert.alert('Audio Error', `Unable to play audio: ${error.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const currentWord = vocabularyList[currentIndex];
//   const progress = vocabularyList.length > 0 ? ((currentIndex + 1) / vocabularyList.length) * 100 : 0;

//   return (
//     <View style={styles.container}>
//       <View style={styles.contentContainer}>
//         <View style={styles.section}>
//           <Text style={styles.title}>Vocabulary Learning</Text>
//         </View>

//         <View style={styles.progressSection}>
//           <View style={styles.progressBar}>
//             <View style={[styles.progressFill, { width: `${progress}%` }]} />
//           </View>
//         </View>

//         {currentWord ? (
//           <View style={styles.wordContainer}>
//             <Text style={styles.vocabLabel}>ENGLISH:</Text>
//             <Text style={styles.vocabContent}>{currentWord.word}</Text>

//             <Text style={styles.vocabLabel}>VIETNAMESE:</Text>
//             <Text style={styles.vocabContent}>{currentWord.meaning}</Text>

//             <Text style={styles.vocabLabel}>Pronunciation:</Text>
//             <Text style={styles.pronunciation}>{currentWord.pronunciation}</Text>

//             <Text style={styles.vocabLabel}>Example Sentence:</Text>
//             <Text style={styles.exampleText}>{currentWord.example_sentence}</Text>

//             <View style={styles.audioSection}>
//               <TouchableOpacity 
//                 style={[styles.audioButton, isLoading && styles.audioButtonDisabled]}
//                 onPress={() => !isLoading && playAudio(currentWord.audio)}
//                 disabled={isLoading}>
//                 <Text style={styles.audioIcon}>{isLoading ? '🔄' : '🔊'}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ) : (
//           <Text>Loading vocabulary...</Text>
//         )}

//         <View style={styles.nextButtonContainer}>
//           <TouchableOpacity style={styles.nextButton} onPress={handleNextWord}>
//             <Text style={styles.nextButtonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };


export default VocabularyLearning;
