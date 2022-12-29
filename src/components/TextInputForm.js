import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const TextInputForm = ({
  onChangeText,
  onBlur,
  value,
  iconName,
  secureTextEntry,
  placeholder,
}) => {
  return (
    <View style={styles.textInputView}>
      <Feather name={iconName} size={20} color="black" />
      <TextInput
        placeholder={placeholder}
        style={styles.txtInput}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInputView: {
    marginTop: 10,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  txtInput: {
    flex: 1,

    marginLeft: 10,
  },
});

export default TextInputForm;
