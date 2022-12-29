/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import AppHome from '../screens/AppHome';
import Discover from '../screens/Discover';
import SearchInput from '../components/SearchInput';

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
            <SafeAreaView style={{backgroundColor: 'white', height: 120}}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <View style={{flexDirection: 'row', paddingVertical: 8}}>
                    <Image
                      source={require('../assets/download.png')}
                      style={styles.profImage}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'grey',
                        }}>
                        Welcome Back!
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '600',
                          color: 'black',
                        }}>
                        Qvelo
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <View
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
                  </View>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
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
            <SafeAreaView style={{backgroundColor: 'white', height: 120}}>
              <SearchInput onchange={console.log('cdcdc')} />
            </SafeAreaView>
          ),
        }}
      />

      <Tab.Screen
        name="Your Saved"
        component={AppHome}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="bookmark" size={20} color="grey" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  profImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});

export default AppNavigator;
