import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Courses from '../pages/courses'; // Ensure this component exists

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Courses">
      <Drawer.Screen name="Courses" component={Courses} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;