import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Task = ({text, complated, setComplated}) => {
  const complateTask = () => {
    // let itemsCopy = [...taskItems];
    setComplated(!complated);
    console.log(complated);
    // itemsCopy.splice(index, 1);
    // setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} onPress={() => complateTask()}>
          <Text>{!complated ? '✅' : '❌'}</Text>
        </TouchableOpacity>
        <Text style={complated ? styles.completedStyle : styles.itemText}>
          {text}
        </Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    color: 'black',
    maxWidth: '80%',
  },
  completedStyle: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
