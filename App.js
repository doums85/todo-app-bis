// rnfs => Create structure of React Native(RN) component

// Function component👇
import { Alert, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
// import nom_composant from 'chemin_relative';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [textEntered, setTextEntered] = useState('');

  function addTaskHandler() {
    if (textEntered) {
      setTasks([
        ...tasks,
        { task: textEntered, id: tasks.length },
      ]);
    } else {
      Alert.alert('ERRROR 💥', 'Please provide a task');
      // 1er argument => title
      // 2e argument => description
    }
  }

  function updateTaskHandler(item, taskEdited) {
    // 1) Find the index of item
    const index = tasks.indexOf(item);

    // 2) Update tasks
    setTasks(function (currentState) {
      currentState[index] = {
        task: taskEdited,
        id: index,
      };
      return currentState;
    });
  }
  console.log(tasks);

  function removeTaskHandler(id) {
    const filterTask = tasks.filter(function (element) {
      return element.id !== id;
    });

    setTasks(filterTask);
  }

  const onChangeHandler = (textEntered) =>
    setTextEntered(textEntered);

  return (
    <View style={styles.appContainer}>
      {/* Input Tasks */}
      <TaskInput
        addTaskHandler={addTaskHandler}
        onChangeHandler={onChangeHandler}
      />

      {/* Task's list */}
      <TaskList
        removeTaskHandler={removeTaskHandler}
        updateTaskHandler={updateTaskHandler}
        tasks={tasks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
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
});
