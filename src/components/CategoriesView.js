import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function CategoriesView({icon, text}) {
  return (
    <TouchableOpacity style={styles.categoryItem}>
      <Feather name={icon} size={15} color="grey" />
      <Text style={{marginLeft: 7}}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  categoryItem: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#eaeaea',
    borderColor: '#c2c2c2',
    borderRadius: 30,
    height: 40,
  },
});

export default CategoriesView;
