import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from 'react';
import {Text, View, StyleSheet,Alert,Image, Button} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '@env';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState('');

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // Hàm xử lý đăng ký
    const handleRegister = () => {
        axios.post(`${API_URL}/register/`, {
            username,
            password,
            email,
        })
        .then(response => {
            console.log('User  registered:', response.data);
            setErrorMessage('Log in successfully'); // Reset error message on success
            // Chuyển hướng đến trang đăng nhập
            navigation.navigate('LogIn');
        })
        .catch(error => {
            if (error.response) {
                setErrorMessage(error.response.data); // Set error message from server
            } else {
                setErrorMessage('An unexpected error occurred.'); // Generic error message
            }
            console.error('There was an error registering the user!', error);
        });
    };

    return (
        <View style={styles.screen}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate("Starting")}>
                    <Icon name="chevron-left" style={{ color: styles.icon.color, fontSize: 19 }} />
                </TouchableOpacity>
                <View style={styles.SignIn}>
                    {/* <Text style={{ color: "#650000", fontSize: 19 }}>Sign On</Text> */}
                </View>
            </View>
    
            <View style={styles.logoContainer}>
                <Image source={require('../../images/logo.png')} style={styles.logo} />
                <Text style={{fontSize:20, }}>VocaQuest</Text>
            </View>
            <Text style={styles.textTitle}>Name:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setUsername}
                placeholder="Name"
            />
    
            <Text style={styles.textTitle}>Email:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text style={styles.textTitle}>Nhập mật khẩu:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Text style={styles.forgetPassword}>Quên mật khẩu!</Text>
            <TouchableOpacity style={styles.btnLogin} onPress={handleRegister}>
                <Text style={styles.btnText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    menu: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    icon: {
        color: "#650000",
    },
    SignIn: {
        flex: 1,
        alignItems: "center",
    },
    textSlogan: {
        fontSize: 36,
        textAlign: "center",
        marginVertical: 50,
        color: "#494646",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 15,
        marginTop: 10,
        fontSize: 16,
        backgroundColor: "#F9F9F9",
        color: "#333333",
    },
    textTitle: {
        fontSize: 16,
        marginTop: 20,
        color: "#494646",
    },
    btnLogin: {
        height: 55,
        backgroundColor: "#FD823E",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        marginTop: 20,
    },
    btnText: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "600",
    },
    forgetPassword: {
        marginTop: 10,
        textAlign: "right",
        color: "#494646",
        fontStyle: "italic",
        textDecorationLine: "underline",
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 50,
    },
    logo: {
        width: 150,
        height: 150,
    },
});

 
export default Register;