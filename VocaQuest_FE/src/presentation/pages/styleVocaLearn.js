import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    audioButtonDisabled: {
      opacity: 0.5,
    },
    audioIcon: {
      fontSize: 18,
      color: '#333',
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
      gap: 10,
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