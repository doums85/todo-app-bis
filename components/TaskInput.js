import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Text,
  Platform,
  Image,
} from 'react-native';
const image = require('../assets/task.png');

export default function TaskInput(props) {
  // useState
  /*
  state `modalVisible` sa valeur initial sera `false`
  en utilisant `useState` de React
  */
  const [modalVisible, setModalVisible] = useState(false);

  function modalHandler() {
    setModalVisible(!modalVisible);
    // !true = false
    // !false = true
  }

  function addTask() {
    props.addTaskHandler();
    modalHandler();
  }

  return (
    <View style={styles.taskContainer}>
      <View style={styles.buttonContainer}>
        <Button
          title="Add a new Task !"
          onPress={modalHandler}
        />
      </View>

      <Modal visible={modalVisible}>
        <View style={styles.inputContainer}>
          {/*
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            }}
            style={styles.image}
          />
           */}
          <Image source={image} style={styles.image} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter a task..."
            onChangeText={props.onChangeHandler}
          />
          <View style={styles.buttonsWrap}>
            <Button
              title="Add task !"
              color={
                Platform.OS === 'android' ? '#000' : '#fff'
              }
              onPress={addTask}
            />
            <Button
              title="Cancel"
              color="#FFBD59"
              onPress={modalHandler}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31356E',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#fff',
    padding: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsWrap: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
