import {StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WelcomeNavigator from './src/navigation/WelcomeNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppNavigator/> */}
      <WelcomeNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
