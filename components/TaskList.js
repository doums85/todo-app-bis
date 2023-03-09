import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function TaskList(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const modalHandler = () => setModalVisible(!modalVisible);

  function longPressHandler(item) {
    // 1) Open Modal
    modalHandler();

    /*   // 2) Update
    props.updateTaskHandler(item); */
  }

  return (
    <View style={styles.taskListContainer}>
      <FlatList
        data={props.tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Pressable
              android_ripple={{
                color: 'red',
              }}
              onPress={() =>
                props.removeTaskHandler(item.id)
              }
              onLongPress={() => longPressHandler(item)}
              style={({ pressed }) =>
                pressed && styles.pressedItem
              }>
              <Text style={styles.taskText}>
                {item.task}
              </Text>
            </Pressable>
          </View>
        )}
        keyExtractor={function ({ item }, index) {
          return index;
        }}
        ListEmptyComponent={function () {
          return (
            <Text style={styles.textEmpty}>
              You have any task 😭
            </Text>
          );
        }}
      />

      {/* MODAL */}
      <Modal visible={modalVisible}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Edit task"
            style={styles.textInput}
          />

          <View style={styles.buttonsWrap}>
            <Button
              title="Update task !"
              color={
                Platform.OS === 'android' ? '#000' : '#fff'
              }
              onPress={() => props.updateTaskHandler(item)}
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
  taskListContainer: {
    flex: 5,
  },
  taskItem: {
    backgroundColor: '#5762B7',
    borderRadius: 6,
    margin: 8,
  },
  taskText: {
    padding: 8,
    textAlign: 'center',
    color: '#FFF',
  },
  textEmpty: {
    color: '#5762B7',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: 'red',
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
  buttonsWrap: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
