import { View,StyleSheet,Text,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import Lessons from "../components/courses/Lessons";

const DATA = [
    {id:'1', title: 'Màn hình chính'},
    {id:'2', title: 'Các khóa học'},
]

const Courses = () => {
    return ( 
        <View style={styles.screen}>
            <View style={styles.menu}>
                <View>
                    <TouchableOpacity>
                        <Icon style={styles.Icon} name="bars"/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.avatar}>
                        <Image style={styles.avatarImage} source= {require('../../images/avatar-den-1_051422423.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Lessons />
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    screen:{
        paddingTop:30,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FD823E',
        alignItems: 'center',
        height: 88
    },
    Icon:{
        fontSize: 40,
        marginLeft: 20,
        alignItems:'center',
        color: '#650000'
    },
   
    avatar: {
        justifyContent:'center',
        alignItems:'center',
    },
    avatarImage:{
        borderRadius: 60,
        width: 40, 
        height: 40,
        marginRight: 20
    },
    listCourses: {
        margin: 20,
        height: 200,
        borderRadius: 10,
        backgroundColor: '#D74949'
    },
    titleCourse:{
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
 
export default Courses;