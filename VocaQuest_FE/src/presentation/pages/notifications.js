import Header from '../components/header/Header';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const notifications = [
  {
    id: 1,
    type: 'daily_reminder', // Nhắc nhở hàng ngày
    title: 'Nhắc nhở học từ vựng',
    message: 'Đừng quên học 5 từ vựng mới hôm nay!',
  },
  {
    id: 2,
    type: 'review_suggestion', // Gợi ý từ cần ôn tập
    title: 'Gợi ý từ vựng cần ôn tập',
    message: 'Hãy ôn tập từ vựng trong bài học tuần trước.',
  },
  {
    id: 3,
    type: 'daily_reminder', // Nhắc nhở hàng ngày
    title: 'Nhắc nhở học từ vựng',
    message: 'Đừng quên học 5 từ vựng mới hôm nay!',
  },
  {
    id: 4,
    type: 'review_suggestion', // Gợi ý từ cần ôn tập
    title: 'Gợi ý từ vựng cần ôn tập',
    message: 'Hãy ôn tập từ vựng trong bài học tuần trước.',
  },
  {
    id: 5,
    type: 'review_suggestion', // Gợi ý từ cần ôn tập
    title: 'Gợi ý từ vựng cần ôn tập',
    message: 'Hãy ôn tập từ vựng trong bài học tuần trước.',
  },
];

const Notifications = () => {
  const renderNotification = ({ item }) => (
    <View style={[styles.notificationItem, item.type === 'daily_reminder' ? styles.dailyReminder : styles.reviewSuggestion]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View>
      <Header style={styles.headerTop} />

      <View style={styles.container}>
        <FlatList data={notifications} keyExtractor={(item) => item.id.toString()} renderItem={renderNotification} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  notificationItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dailyReminder: {
    backgroundColor: '#ffb06a',
    borderColor: '#fcb045',
    borderWidth: 1,
  },
  reviewSuggestion: {
    backgroundColor: '#ffb06a',
    borderColor: '#7aa9fc',
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    color: '#89441b',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
});

export default Notifications;