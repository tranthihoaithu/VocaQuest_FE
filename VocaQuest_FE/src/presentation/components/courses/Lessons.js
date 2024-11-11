import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  // Gọi API khi component được render
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/lessons/')  // URL của API Django
      .then(response => {
        setLessons(response.data);  // Lưu dữ liệu vào state
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderCourse = ({ item }) => {
    return (
      <TouchableOpacity><View style={styles.listCourses}>
        {/* Course Header */}
        <View style={styles.titleCourse}>
          <View>
            <Image style={styles.avartarImage} />
          </View>
          <View>
          <View style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>{item.title}</Text>  {/* Title displayed here */}
          </View>
          </View>
          <View>
            <TouchableOpacity>
              <Image style={styles.iconEllipsis} source={require('../../../images/more.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress */}
        <View>
          <View style={styles.Progress}>
            <View style={styles.row}>
              <Text style={styles.textProgressOne}>{item.progress}%</Text>
              <Text style={styles.textProgressTwo}>{item.completed}/{item.total} Mục đã học</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
          </View>

          {/* New Words Section */}
          <View style={styles.newWordsSection}>
            <TouchableOpacity style={styles.newWordsTextContainer}>
              <Text style={styles.newWordsText}>Chưa Học từ mới</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image style={styles.iconDotsMenu} source={require('../../../images/dots-menu.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
      
    );
  };

  return (
    <FlatList
      data={lessons}
      renderItem={renderCourse}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  listCourses: {
    margin: 20,
    height: 200,
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
  avartarImage: {
    borderRadius: 60,
    width: 44,
    height: 44,
    backgroundColor: '#000555',
  },
  textName: {
    fontSize: 22,
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
    flex: 1, // Adjust as needed
    marginRight: 8, // Add some spacing between the text and the icon
  },
  newWordsText: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#F4D00F',
    width: '100%', // Change to '100%' for full width
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
});
ư
export default Lessons;
