import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

import ListWordFinish from '../components/finish/ListWordFinish';
import Rating from '../components/finish/Rating';
import Header from '../components/header/Header';
import { ScrollView } from 'react-native-gesture-handler';

//cắt ProgressBar ra componnent fisnish rồi gọi ngược vô đây dùng
const ProgressBar = ({ progress, total }) => {
  const percentage = (progress / total) * 100; // Tính phần trăm
  const iconPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(iconPosition, {
      toValue: percentage,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  return (
    <View style={styles.progressBar}>
      {/* Thanh tiến độ */}
      <View style={[styles.progress, { width: `${percentage}%` }]} />
      {/* Icon chạy theo tiến độ */}
      <Animated.View
        style={[
          styles.iconWrapper,
          {
            left: iconPosition.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      >
        <View style={styles.iconCircle}>
          <Image source={require('../../images/logo.png')} style={styles.iconImage} />
        </View>
      </Animated.View>
      {/* Phần trăm */}
      <Text style={styles.progressText}>
        {progress}/{total}
      </Text>
    </View>
  );
};

// Component Finish
const Finish = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Header /> */}

      {/* Tiến độ nè */}
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>GOOD LUCK</Text>
          <Text style={styles.subtitle}>Chúc mừng bạn đã hoàn thành bài học!</Text>
        </View>

        <View style={styles.section2}>
          <Text style={styles.sectionTitle}>Tiến độ của bạn</Text>
          <View style={styles.row}>
            <Text style={styles.infoTitle}>Điểm bạn đạt được</Text>
            <Text style={styles.infoValue}>1139</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.infoTitle}>Mục tiêu hàng ngày của bạn</Text>
            <ProgressBar progress={30} total={100} />
          </View>

          <View style={styles.row}>
            <Text style={styles.infoTitle}>Điểm còn lại cần đạt</Text>
            <Text style={styles.infoValue}>70</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.infoTitle}>Part 4. Advertisement</Text>
            <ProgressBar progress={0} total={24} />
          </View>
        </View>
      </View>

      {/* Đạt được từ vựng nè */}
      <ListWordFinish />

      {/* Xếp hạng nè */}
      <Rating />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  section2: {
    borderRadius: 20,
    paddingBottom: 10,
    backgroundColor: '#dfe4e0',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  sectionTitle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#df9b4a',
    height: 35,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  row: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
  },
  infoTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 15,
  },
  infoValue: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  progressBar: {
    height: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginTop: 5,
    position: 'relative',
  },
  progress: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#df9b4a',
  },
  progressText: {
    position: 'absolute',
    top: -20,
    right: 0,
    fontSize: 12,
    color: '#333',
  },
  iconWrapper: {
    position: 'absolute',
    top: -10,
    transform: [{ translateX: -10 }],
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconImage: {
    width: 30, // Image size
    height: 30, // Image size
  },
});

export default Finish;