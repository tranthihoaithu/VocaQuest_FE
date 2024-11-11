 import { useNavigation } from "@react-navigation/native";
import {View,Text, StyleSheet, Image, Button } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

 const Starting = () => {
    const navigation =useNavigation({

    })
    return (  
        <View style={styles.screen}>
            <Image style = {{width: 332, height:332}} source={require('../../images/logo.png')} />
            <Text style={styles.titleText}>VocaQuest</Text>
            <TouchableOpacity style={styles.btnGetStarted} >
                <Text style={styles.textBtnGS}> GET STARTED</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogIn} onPress={()=>navigation.navigate('LogIn')} >
                <Text style={styles.textLogIn}> LOG IN</Text>
            </TouchableOpacity>
            
        </View>
    );
 }

 const styles = StyleSheet.create({
    screen: {
        flex:1,
       alignItems: 'center',
       justifyContent: 'center',
    },
    titleText:{
        fontSize: 36, 
        color: '#333333',
        fontWeight: 'bold',
        
    },
    btnGetStarted: {
        width: 290,
        height: 68,
        borderRadius: 40,
        backgroundColor: '#FD823E',
        marginTop: 10
    },
    textBtnGS: {
        color : '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 15,
        fontFamily: 'Cochin',

    },
    btnLogIn: {
        width: 290,
        height: 68,
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#FD823E',
        borderRadius: 40,
        backgroundColor: '#FFFFFF',
       
    },
    textLogIn: {
        color : '#FD823E',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Cochin',
        margin: 15

    }
 })
 export default Starting;