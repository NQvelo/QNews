import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderButton = ({iconName, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Ionicons name={iconName} size={18} color="black" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#d9d9d9',
    padding: 7,
  },
});

export default HeaderButton;
