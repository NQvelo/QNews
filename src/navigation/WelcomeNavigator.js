import React from 'react';
import {View} from 'react-native';

import Welcome from '../screens/Welcome';
import AppNavigator from './AppNavigator';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StatiaPage from '../screens/StatiaPage';
import HeaderButton from '../components/HeaderButton';
import Login from '../registration/Login';

const Stack = createNativeStackNavigator();

const WelcomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="welcome"
      component={Welcome}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="home"
      component={AppNavigator}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="statia"
      component={StatiaPage}
      options={{
        headerShown: false,
        title: '',
        headerShadowVisible: false,

        headerRight: () => {
          return (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 90,
              }}>
              <HeaderButton iconName="bookmark-outline" />
              <HeaderButton iconName="arrow-redo-outline" />
            </View>
          );
        },
      }}
    />
  </Stack.Navigator>
);

export default WelcomeNavigator;
