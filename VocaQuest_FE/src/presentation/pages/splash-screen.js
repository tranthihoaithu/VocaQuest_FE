import { useEffect } from "react";
import {View,Text, StyleSheet, Image } from "react-native"

 const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Starting');
        },3000);
    },[navigation]);
    
    return (  
        <View style={styles.screen}>
            <Image source={require('../../images/logo.png')}
            style ={{width: 332, height: 332, marginTop: 190}}  />
            <Text style={styles.titleText} >VocaQuest</Text>
        </View>
    );
 }

 const styles = StyleSheet.create({
    screen: {
        backgroundColor : '#FD823E',
        alignItems: 'center',
        height: 1200
        
    },
    titleText:{
        fontSize: 36, 
        fontStyle: 'bold', 
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
 })
 export default SplashScreen;