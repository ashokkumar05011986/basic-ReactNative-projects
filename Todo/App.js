import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Task from './src/components/Task';

const App = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [complated, setComplated] = useState(false);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  const complateTask = index => {
    // let itemsCopy = [...taskItems];
    // setComplated(!complated);
    // console.log(complated);
    // itemsCopy.splice(index, 1);
    // setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <Text style={styles.sectionTitle}>Hello world please guide me how to learn RN </Text>
        <View styles={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => complateTask()}>
              <Task
                text={item}
                complated={complated}
                setComplated={setComplated}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task.. '}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  items: {},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: '#000',
  },
});
