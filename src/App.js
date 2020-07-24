/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DataUserScreen from './screens/dataUser';
import InputUserScreen from './screens/inputUser';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const ROUTE_NAME = {
    DATA_USER: 'Data User',
    INPUT_USER: 'Input User',
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0D325F',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name={ROUTE_NAME.INPUT_USER}
          component={InputUserScreen}
        />
        <Stack.Screen name={ROUTE_NAME.DATA_USER} component={DataUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
