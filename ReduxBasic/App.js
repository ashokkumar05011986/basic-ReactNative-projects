import {Button, Text, View} from 'react-native';
import React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  // type yerine istenilen herhangibir isim de verilebilir.
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {...state, counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {...state, counter: state.counter - 1};

    default:
      return state;
  }
}

const App = () => {
  const store = createStore(reducers, initialState);
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <First />
        <Second />
      </View>
    </Provider>
  );
};

export default App;

const First = () => {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({type: 'INCREASE_COUNTER'});
  };
  return (
    <View style={{flex: 1, backgroundColor: 'lightpink'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        First
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
        }}>
        {counter}
      </Text>
      <Button title="INCREASE" onPress={handleIncrease} />
    </View>
  );
};

const Second = () => {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch({type: 'DECREASE_COUNTER'});
  };

  return (
    <View style={{flex: 1, backgroundColor: 'lightcyan'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Second
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
        }}>
        {counter}
      </Text>
      <Button title="DECREASE" onPress={handleDecrease} />
    </View>
  );
};
