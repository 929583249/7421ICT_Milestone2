import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NewToDoScreen from './NewToDoScreen'; // 确保路径正确
import { StatusBar } from 'expo-status-bar'; // 正确导入 StatusBar

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My to do list</Text>
      </View>
      <View style={styles.leftTextContainer}>
        <Text style={styles.leftText}>FIRST THING</Text>
        <Text>------------------------</Text>
        <Text style={styles.leftText}>SECOND THING</Text>
        <Text>------------------------</Text>
        <Text style={styles.leftText}>THIRD THING</Text>
        <Text>------------------------</Text>
        <Text style={styles.leftText}>FOURTH TGGGGHING</Text>
        <Text>------------------------</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('NewToDo')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add new to do list</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewToDo" component={NewToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {//调整位置
    position: 'absolute',
    top: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {//调整文本大小
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 30,//文本间距
    paddingBottom: 20,
    color:'red',
  },
  leftTextContainer: {
    position: 'absolute',
    top: 120, // Adjust according to the header size
    left: 20,//左边距离
    alignItems: 'flex-start',
    justifyContent: 'center',
    

  },
  leftText: {
    fontSize: 18, // Adjust this as needed文本大小
    color:'green',
  },
  button: {
    marginTop: 20, // 添加适当的边距
  },
  buttonText: {
    fontSize: 18, // 设置按钮文本大小
    color: 'blue', // 设置按钮文本颜色为蓝色
    top: 350,
  },
});