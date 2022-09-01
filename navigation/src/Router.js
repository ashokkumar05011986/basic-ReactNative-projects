import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './pages/First';
import Second from './pages/Second';
import {Button} from 'react-native';

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'pink',
          },

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerTintColor: 'darkred',
        }}>
        <Stack.Screen name="FirstScreen" component={First} />
        <Stack.Screen
          name="SecondScreen"
          component={Second}
          options={({route}) => ({
            title: 'Product Detail',
            headerRight: () => (
              <Button
                title="Save"
                onPress={() => {
                  alert(route.params.username);
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
