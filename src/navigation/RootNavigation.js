import React from 'react';
import useAuth from '../hooks/useAuth';
import AppNavigator from './AppNavigator';
import WelcomeNavigator from './WelcomeNavigator';

const RootNavigation = () => {
  const {user} = useAuth();
  return user ? <AppNavigator /> : <WelcomeNavigator />;
};

export default RootNavigation;
