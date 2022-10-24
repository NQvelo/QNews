import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';;
import Feather from 'react-native-vector-icons/Feather';;

function Header() {
  const [searchInput, setSearchInput] = useState();
  
  return <View style={styles.container}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.headerTxt}>News </Text>
      <TouchableOpacity>
      <Image source={require('../assets/profile.png')} style={styles.profImage}/>
      </TouchableOpacity>
</View>
    <View style={styles.textInputHeader}>
      <View style={{width:20, height:20, backgroundColor:'transparent', marginHorizontal:10}}>
      <Feather name="search" size={20} color='black' />
      </View>
    <TextInput value={searchInput} onChangeText={setSearchInput} fontSize={15} placeholder='Search Here' />
      </View>
    
</View>;
}
const styles = StyleSheet.create({
  container: {
    padding:15,
  
  },
  headerTxt: {
   marginVertical:8,
    fontSize: 30,
    fontWeight: '700',
    marginHorizontal:10,
  },
  textInputHeader: { 
    flexDirection: 'row',
    marginTop:10,
   paddingVertical:18,
    borderRadius: 20,
    backgroundColor:'white'
  },
  profImage: {
    width: 45,
    height: 45,
    borderRadius:50,
  }
});

export default Header;