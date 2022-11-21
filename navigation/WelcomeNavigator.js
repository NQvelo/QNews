import React from "react";

import {Button} from 'react-native'
import Welcome from "../screens/Welcome";
import AppNavigator from "./AppNavigator";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import StatiaPage from "../screens/StatiaPage";

const Stack = createNativeStackNavigator();

const WelcomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="home" component={AppNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="statia" component={StatiaPage} options={{ headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ), }} />

  </Stack.Navigator>
);

export default WelcomeNavigator;