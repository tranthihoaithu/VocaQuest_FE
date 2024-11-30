import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { API_URL } from '@env';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import { styles } from './Style_Lessons';

const Lessons = () => {
  const navigation = useNavigation();
  const [lessons, setLessons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [goal, setGoal] = useState(null);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

  console.log(API_URL);
  useEffect(() => {
    axios
      .get(`${API_URL}/lessons/`)
      .then(response => {
        setLessons(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderCourse = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('LessonDetails', { lesson_id: item.id })}>
      <View style={styles.listCourses}>
        {/* Course Header */}
        <View style={styles.titleCourse}>
          <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.avartarImage} />
            <Text style={styles.lessonTitle}>{item.title}</Text>
            <View style={styles.iconContainer2}>
              <Icon name="rocket" size={24} color="#000" onPress={() => setModalVisible(true)} />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Image style={styles.iconEllipsis} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress */}
        <View>
          <View style={styles.Progress}>
            <View style={styles.row}>
              {/* <Text style={styles.textProgressOne}>{item.progress}%</Text> */}
              <Text style={styles.textProgressOne}>20%</Text>
              {/* <Text style={styles.textProgressTwo}>{item.completed}/{item.total_vocab} mục đã học</Text> */}
              <Text style={styles.textProgressTwo}>5/{item.total_vocab} mục đã học</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
          </View>

          {/* New Words Section */}
          <View style={styles.newWordsSection}>
            <TouchableOpacity style={styles.newWordsTextContainer} onPress={() => navigation.navigate('LessonDetails', { lesson_id: item.id })}>
              <Text style={styles.newWordsText}>Học Từ Vựng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image style={styles.iconDotsMenu} source={require('../../../images/dots-menu.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleGoalSelection = (selectedGoal) => {
    setGoal(selectedGoal);
    setModalVisible(false); 
    setConfirmationModalVisible(true);
  };

  const handleConfirmSelection = () => {
    setConfirmationModalVisible(false);
    console.log(`Goal selected: ${goal}`);
  };

  return (
    <View>
      <FlatList
        data={lessons}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Popup Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Chọn mục tiêu hàng ngày</Text>
            <Text style={styles.modalBody}>TỪ MỖI NGÀY</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection(5)}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection(10)}>
                <Text style={styles.buttonText}>10</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleGoalSelection(15)}>
                <Text style={styles.buttonText}>15</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Đóng</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirmSelection}
              >
                <Text style={styles.closeButtonText}>Xác Nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={confirmationModalVisible}
        onRequestClose={() => setConfirmationModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Xác Nhận Mục Tiêu</Text>
            <Text style={styles.modalBody}>
              Bạn đã chọn mục tiêu: {goal} từ vựng mỗi ngày.
            </Text>

            <ScrollView
              horizontal
              contentContainerStyle={styles.daysContainer}
              showsHorizontalScrollIndicator={false}
            >
              {Array.from({ length: goal }).map((_, index) => (
                <View key={index} style={styles.dayCircle}>
                  <Text style={styles.dayText}>{index + 1}</Text>
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setConfirmationModalVisible(false);
                setModalVisible(true);
              }}
            >
              <Text style={styles.editButtonText}>Chỉnh sửa mục tiêu</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
};


export default Lessons;


