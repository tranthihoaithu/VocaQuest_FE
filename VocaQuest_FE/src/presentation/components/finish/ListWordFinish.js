import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';

const ListWordFinish = () => {
  return (
    <View style={styles.content}>
      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Bạn vừa đạt được ....</Text>
        <View style={styles.row}>
          <Image source={require('../../../images/logo.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.textEngLish}>Mother</Text>
            <Text style={styles.textVietNames}>Mẹ</Text>
            <Text style={styles.textEngLish}>Daughter</Text>
            <Text style={styles.textVietNames}>Con gái</Text>
            <Text style={styles.textEngLish}>Son</Text>
            <Text style={styles.textVietNames}>Con trai</Text>
            <Text style={styles.textEngLish}>Wife</Text>
            <Text style={styles.textVietNames}>Vợ</Text>
          </View>
        </View>
      </View>
    </View>
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
    marginLeft: 20,
  },
  textEngLish: {
    fontSize: 18,
    fontWeight: '700',
  },
  textVietNames: {
    fontSize: 16,
    fontWeight: '300',
  },
});

export default ListWordFinish;