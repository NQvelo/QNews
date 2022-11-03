import React from "react";

import Welcome from "../screens/Welcome";
import AppNavigator from "./AppNavigator";


import { createNativeStackNavigator } from "@react-navigation/native-stack"

const stack = createNativeStackNavigator();

const WelcomeNavigator = (navigation) => {
  return (
    <stack.Navigator>
      <stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
      <stack.Screen name="home" component={AppNavigator} options={{ headerShown: false }} />
    </stack.Navigator>
  );
}

export default WelcomeNavigator;