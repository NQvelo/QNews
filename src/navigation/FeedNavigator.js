import React from 'react';

import AppNavigator from './AppNavigator';
import StatiaPage from '../src/screens/StatiaPage';
import AppHome from '../src/screens/AppHome';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeNavigator from './WelcomeNavigator';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={AppHome}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="statia"
      component={StatiaPage}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
