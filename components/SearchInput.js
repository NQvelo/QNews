import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';;
import Feather from 'react-native-vector-icons/Feather';;

function SearchInput() {
  const [searchInput, setSearchInput] = useState();
  
  return <View>
    <View style={styles.textInputHeader}>
      <View style={{width:25, height:25, backgroundColor:'transparent', marginHorizontal:10}}>
      <Feather name="search" size={23} color='black' />
      </View>
    <TextInput value={searchInput} onChangeText={setSearchInput} fontSize={15} placeholder='Search Here' />
      </View>
    
</View>;
}
const styles = StyleSheet.create({
 
  headerTxt: {
   marginVertical:8,
    fontSize: 30,
    fontWeight: '700',
    marginHorizontal:10,
  },
  textInputHeader: { 

    borderWidth: 1.1,
    borderColor:'#bebebe',
    flexDirection: 'row',
    marginTop:10,
   paddingVertical:13,
    borderRadius: 50,
    backgroundColor:'#f6f6f6'
  },
  
});

export default SearchInput;