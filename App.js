import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeNavigator from './src/navigation/WelcomeNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <WelcomeNavigator />
    </NavigationContainer>
  );
};

export default App;
