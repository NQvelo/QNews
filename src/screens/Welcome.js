import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from '../components/AppButton';

import Screen from '../components/Screen';
function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground style={styles.container} source={require('../assets/welcomeImage.png')}> */}

      <View style={{width: '100%', bottom: 50, alignItems: 'center'}}>
        <View style={styles.textHeader}>
          <Text style={{fontSize: 40, fontWeight: '600', color: 'white'}}>
            Welcome!
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400', color: 'white'}}>
            It is free to use for everyone
          </Text>
        </View>
        <AppButton
          title="LOGIN"
          style={styles.loginButton}
          onPress={() => navigation.navigate('home')}
        />
        <AppButton
          title="REGISTER"
          style={styles.RegButton}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}
const styles = StyleSheet.create({
  textHeader: {
    width: '90%',
    height: 500,
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#b82c45',
  },
  loginButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    color: 'white',
  },
  RegButton: {
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Welcome;
