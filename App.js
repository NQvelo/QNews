import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

import AppHome from './screens/AppHome'
import Discover from './screens/Discover';

import Feather from 'react-native-vector-icons/Feather';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
       <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={AppHome}  options={{
     
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={20} color='black' />
          ),
        }} />
        
        <Tab.Screen name="Discover" component={Discover}  options={{
         
          tabBarIcon: ({ size, color }) => (
            <Feather name="compass" size={20} color='black' />
          ),
        }} />
        
        <Tab.Screen name="Your Saved" component={AppHome}  options={{
          
          tabBarIcon: ({ size, color }) => (
            <Feather name="bookmark" size={20} color='black' />
          ),
        }} />

         <Tab.Screen name="Settings" component={AppHome}  options={{
          
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={20} color='black' />
          ),
        }} />
        
      </Tab.Navigator>
   {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <AppHome/>
    </SafeAreaView> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})


export default App;