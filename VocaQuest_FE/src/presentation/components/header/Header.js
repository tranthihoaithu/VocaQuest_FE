import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigation = useNavigation(); // Hook lấy navigation

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  
  const notificationCount = 5;

  return (
    <View style={styles.menu}>
      <View>
        <TouchableOpacity>
          <Icon style={styles.icon} name="bars" />
        </TouchableOpacity>
      </View>
      <View style={styles.rightMenu}>
        <View style={styles.notificationContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Icon style={styles.iconBell} name="bell" />
          </TouchableOpacity>
          {notificationCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>{notificationCount}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.avatar} onPress={toggleDropdown}>
          <Image style={styles.avatarImage} source={require('../../../images/avatar-den-1_051422423.png')} />
        </TouchableOpacity>
        {/* Dropdown */}
        {isDropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FD823E',
    height: 88,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  icon: {
    fontSize: 32,
    color: '#fff',
  },
  iconBell: {
    fontSize: 25,
    marginHorizontal: 10,
    color: 'white',
  },
  rightMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContainer: {
    position: 'relative',
    marginHorizontal: 10,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -2,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#fff',
  },
  dropdown: {
    position: 'absolute',
    top: 75,
    right: 16,
    width: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    zIndex: 9999,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Header;
