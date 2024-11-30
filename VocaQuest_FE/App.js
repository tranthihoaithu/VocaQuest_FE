// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/presentation/navigations/stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Courses from './src/presentation/pages/courses'; 
import Header from './src/presentation/components/header/Header';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}>
        {/* Thêm headerShown: false vào tất cả các màn hình Drawer */}
        <Drawer.Screen 
          name="HomeStack" 
          component={HomeStack} 
          options={{ title: 'Home', headerShown: false }} // Ẩn header cho HomeStack
        />
        <Drawer.Screen 
          name="Courses" 
          component={Courses} 
          options={{ headerShown: false }} // Ẩn header cho màn hình Courses
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
