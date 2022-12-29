import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

function SearchInput({onchange}) {
  const [searchInput, setSearchInput] = useState();

  return (
    <View style={{marginHorizontal: 10}}>
      <View style={styles.textInputHeader}>
        <View
          style={{
            width: 25,
            height: 25,
            backgroundColor: 'transparent',
            marginHorizontal: 10,
          }}>
          <Feather name="search" size={23} color="black" />
        </View>
        <TextInput
          onChangeText={setSearchInput}
          returnKeyType="search"
          value={searchInput}
          fontSize={15}
          placeholder="Search Here"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerTxt: {
    marginVertical: 8,
    fontSize: 30,
    fontWeight: '700',
    marginHorizontal: 10,
  },
  textInputHeader: {
    borderWidth: 1.1,
    borderColor: '#bebebe',
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
  },
});

export default SearchInput;
