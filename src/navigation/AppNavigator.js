/* eslint-disable react/react-in-jsx-scope */
import * as reactNative from 'react-native';
import AppHome from '../screens/AppHome';
import Discover from '../screens/Discover';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={AppHome}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={20} color="grey" />,

          headerShown: true,
          header: () => (
            <reactNative.SafeAreaView style={{backgroundColor: 'white'}}>
              <reactNative.View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  justifyContent: 'space-between',
                }}>
                <reactNative.TouchableOpacity>
                  <reactNative.View
                    style={{flexDirection: 'row', paddingVertical: 8}}>
                    <reactNative.Image
                      source={require('../assets/download.png')}
                      style={styles.profImage}
                    />
                    <reactNative.View style={{marginLeft: 10}}>
                      <reactNative.Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'grey',
                        }}>
                        Welcome Back!
                      </reactNative.Text>
                      <reactNative.Text
                        style={{
                          fontSize: 20,
                          fontWeight: '600',
                          color: 'black',
                        }}>
                        Qvelo
                      </reactNative.Text>
                    </reactNative.View>
                  </reactNative.View>
                </reactNative.TouchableOpacity>

                <reactNative.TouchableOpacity
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <reactNative.View
                    style={{
                      borderWidth: 1,
                      borderRadius: 50,
                      borderColor: '#d9d9d9',
                      padding: 10,
                    }}>
                    <Ionicons
                      name="ios-notifications-outline"
                      size={22}
                      color="black"
                    />
                  </reactNative.View>
                </reactNative.TouchableOpacity>
              </reactNative.View>
            </reactNative.SafeAreaView>
          ),
        }}
      />

      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="compass" size={20} color="grey" />
          ),
          headerShown: true,
          header: () => (
            <reactNative.SafeAreaView
              style={{backgroundColor: 'white'}}></reactNative.SafeAreaView>
          ),
        }}
      />

      <Tab.Screen
        name="Your Saved"
        component={AppHome}
        options={{
          tabBarIcon: ({size, color}) => (
            <reactNative.SafeAreaView style={{backgroundColor: 'white'}}>
              <Ionicons name="bookmark" size={20} color="grey" />
            </reactNative.SafeAreaView>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = reactNative.StyleSheet.create({
  profImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});

export default AppNavigator;
