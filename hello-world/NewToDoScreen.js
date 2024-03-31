import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function NewToDoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title here"
        multiline
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description here"
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          onPress={() => navigation.goBack()} // 使用goBack()方法返回上一屏
        />
        <View style={styles.buttonSpacer} />
        <Button
          title="Save"
          onPress={() => {}} // Save按钮的点击事件暂时为空
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginVertical: 8,
    fontSize: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 16,
    minHeight: 60,
  },
  buttonContainer: {
    flexDirection: 'row', // 使按钮并排显示
    justifyContent: 'space-between', // 分散对齐
    width: '100%', // 容器宽度为100%
  },
  buttonSpacer: {
    width: 10, // 在两个按钮之间添加一些空间
  },
});

export default NewToDoScreen;
