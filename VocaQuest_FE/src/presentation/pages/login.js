import { useNavigation } from "@react-navigation/native";
import {Text, View, StyleSheet, Button} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const LogIn = () => {
    const navigation=useNavigation({

    })
    return ( 
        <View style={styles.screen}>
            <View style={styles.menu}>
                <View style={styles.icon}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Starting')}>
                        <Icon name='chevron-left' style={{color:'#650000', fontSize:19}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignIn}>
                    <Text style={{color:'#650000', fontSize:19}} >Sign In</Text>
                </View>
            </View>
            <View>
                <Text style={styles.textSlogan}>Đến Các Khóa Học Của Công Đồng Tạo</Text>
                <Text style={styles.textTitle}>Tên đăng nhập hoặc Email:</Text>
                <TextInput style={styles.textInput} placeholder=" thu@gmail.com"/>
                <Text style={styles.textTitle}>Nhập mật khẩu:</Text>
                <TextInput style={styles.textInput} placeholder=" ......"/>
                <Text style={styles.forgetPassword}>Quên mật khẩu!</Text>
                <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('Courses')}>
                     <Text style={styles.btnText}>LOG IN</Text>
                </TouchableOpacity>
                
            </View>

        </View> 
    );
}

const styles=StyleSheet.create ({
    screen: {
        paddingTop: 10
    },
    menu:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  alignItems: 'center'
        
    },
    icon:{
        marginTop: 30,
        fontSize: 20,
        paddingLeft: 10,
        color: '#650000',
    },
    SignIn: {
        marginTop: 30,
        fontSize: 19,
        alignItems: 'center',
        flex:2
        

    },
    textSlogan: {
        fontSize: 36,
        textAlign: 'center',
        paddingTop: 114,
        paddingLeft:50,
        paddingRight: 50
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        width: 287,
        height: 53,
        marginLeft: 43,
        marginTop: 10,
        placeholderTextColor:"#FFFFFF",
        
        
    },
    textTitle: {
        paddingLeft: 43,
        paddingTop: 10,
    },
    btnLogin: {
        height: 55,
        width: 290,
        marginTop: 15,
        marginLeft: 46,
        backgroundColor: '#FD823E',
        alignItems: 'center',
        borderRadius: 40,
    },
    btnText:{
        textAlign: 'center',
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        paddingTop: 10
    },
    forgetPassword:{
        paddingTop: 10,
        paddingLeft: 230,
        fontStyle: 'italic',
        color: '#494646'
        
    }

})
 
export default LogIn;