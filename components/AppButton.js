import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const AppButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, style]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: "90%",
    height: 50,
    justifyContent: 'center',
    borderRadius: 7,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
fontWeight:'500'
  }
});

export default AppButton;
