import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.menu}>
      <View>
        <TouchableOpacity>
          <Icon style={styles.Icon} name="bars" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.avatar}>
          <Image style={styles.avatarImage} source={require('../../../images/avatar-den-1_051422423.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FD823E',
    alignItems: 'center',
    height: 88,
  },
  Icon: {
    fontSize: 40,
    marginLeft: 20,
    alignItems: 'center',
    color: '#650000',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: 60,
    width: 40,
    height: 40,
    marginRight: 20,
  },
});

export default Header;