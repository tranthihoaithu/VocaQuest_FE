import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from 'react';
import { Text, View, StyleSheet, Alert, Image, Button, ActivityIndicator } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '@env';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false); // State for loading
    const navigation = useNavigation();

    // Hàm kiểm tra email hợp lệ
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // Hàm kiểm tra mật khẩu hợp lệ (ở đây chỉ là kiểm tra tối thiểu 6 ký tự)
    const isValidPassword = (password) => {
        return password.length >= 6;
    };

    // Hàm xử lý đăng nhập
    const handleLogin = () => {
        // Set loading state to true when login is triggered
        setLoading(true);

        axios.post(`${API_URL}/api/login_token/`, {
            username,
            password
        })
        .then(response => {
            console.log(response.data);

            // Simulate a 3-second delay before navigating to the Courses screen
            setTimeout(() => {
                setLoading(false); // Stop the loading spinner
                navigation.navigate('Courses'); // Navigate to 'Courses' screen
            }, 3000); // 3 seconds delay

        })
        .catch(error => {
            setLoading(false); // Stop loading in case of error
            console.log(error);
            Alert.alert('Lỗi', 'Đăng nhập không thành công');
        });
    };

    return (
        <View style={styles.screen}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate("Starting")}>
                    <Icon name="chevron-left" style={{ color: styles.icon.color, fontSize: 19 }} />
                </TouchableOpacity>
                <View style={styles.SignIn}>
                    <Text style={{ color: "#650000", fontSize: 19 }}>Sign In</Text>
                </View>
            </View>

            <View style={styles.logoContainer}>
                <Image source={require('../../images/logo.png')} style={styles.logo} />
                <Text style={{ fontSize: 20 }}>VocaQuest</Text>
            </View>

            {/* Show loading spinner if loading is true */}
            {loading ? (
                <ActivityIndicator size="large" color="#FD823E" style={styles.loadingIndicator} />
            ) : (
                <>
                    <Text style={styles.textTitle}>Tên đăng nhập hoặc Email:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nhập Username của bạn"
                        onChangeText={setUsername}
                    />
                    <Text style={styles.textTitle}>Nhập mật khẩu:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nhập mật khẩu"
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Text style={styles.forgetPassword}>Quên mật khẩu!</Text>
                </>
            )}
           {/* Only show the login button when loading is false */}
            {!loading && (
                <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                    <Text style={styles.btnText}>LOG IN</Text>
                </TouchableOpacity>
            )}
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
    textInput: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 15,
        marginTop: 10,
        fontSize: 18,
        backgroundColor: "#F9F9F9",
        color: "#333333",
    },
    textTitle: {
        fontSize: 18,
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
    loadingIndicator: {
        marginTop: 20,
    },
});

export default LogIn;
