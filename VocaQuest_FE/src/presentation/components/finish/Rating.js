import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

const Rating = () => {
  const data = [
    { id: '1', rank: '1', name: 'Trần Tiến Thế', points: '245678' },
    { id: '2', rank: '2', name: 'Nguyễn Minh Quân', points: '230456' },
    { id: '3', rank: '3', name: 'Lê Anh Tuấn', points: '215678' },
    { id: '4', rank: '4', name: 'Phan Tiến Duy', points: '200345' },
    { id: '5', rank: '5', name: 'Đoàn Minh Phú', points: '190234' },
    { id: '5', rank: '5', name: 'Đoàn Minh Phú', points: '190234' },
    { id: '5', rank: '5', name: 'Đoàn Minh Phú', points: '190234' },
    { id: '5', rank: '5', name: 'Đoàn Minh Phú', points: '190234' },
    { id: '5', rank: '5', name: 'Đoàn Minh Phú', points: '190234' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={require('../../../images/logo.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.rank}>{item.rank}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.points}>{item.points}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.content}>
      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Bảng xếp hạng tuần này</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={true} // Enable FlatList scrolling
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#dfe4e0',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  image: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  points: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Rating;