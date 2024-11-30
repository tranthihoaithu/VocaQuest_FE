import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    listCourses: {
      margin: 20,
      height: 220,
      borderRadius: 10,
      backgroundColor: '#D74949',
    },
    titleCourse: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      width: '100%',
    },
    avartarImage: {
      borderRadius: 60,
      width: 44,
      height: 44,
      backgroundColor: '#000555',
    },
    iconContainer2: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 44,
      width: 44,
      backgroundColor: '#ccc',
      borderRadius: 22,
      borderWidth: 2,
      borderColor: '#fff',
    },
    iconEllipsis: {
      height: 40,
      width: 40,
    },
    Progress: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textProgressOne: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
    },
    textProgressTwo: {
      fontSize: 16,
    },
    progressBarContainer: {
      height: 25,
      marginLeft: 15,
      marginRight: 15,
      borderRadius: 20,
      backgroundColor: '#D9D9BB',
      overflow: 'hidden',
      marginTop: 15,
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#F4D00F',
    },
    newWordsSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    newWordsTextContainer: {
      flex: 1,
      marginRight: 8,
    },
    newWordsText: {
      fontSize: 18,
      color: '#fff',
      backgroundColor: '#F4D00F',
      width: '100%',
      height: 40,
      textAlign: 'center',
      lineHeight: 40,
      borderRadius: 8,
    },
    iconContainer: {
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#D9D9D9',
    },
    iconDotsMenu: {
      height: 25,
      width: 25,
    },
    lessonTitle: {
      marginLeft: 10,
      fontSize: 24,
      color: '#fff',
      flex: 1,
      textAlign: 'center'
    },
    // Modal styles
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
    },
    modalContent: {
      width: '80%',
      maxHeight: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden', 
    },
    modalTitle: {
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalBody: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    daysContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dayCircle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5,
      borderWidth: 2, 
      borderColor: '#4CAF50',
    },
    dayText: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    editButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#ffcc00',
      borderRadius: 5,
      alignItems: 'center',
    },
    editButtonText: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    button: {
      width: 70,
      height: 70,
      backgroundColor: '#F4D00F',
      borderRadius: 35, 
      justifyContent: 'center', 
      alignItems: 'center',
      marginHorizontal: 10,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      lineHeight: 70,
    },
    
    closeButton: {
      backgroundColor: '#F4D00F',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    closeButtonText: {
      fontSize: 18,
      color: '#fff',
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 20,
    },
    confirmButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginLeft: 10,
    },
  });

  