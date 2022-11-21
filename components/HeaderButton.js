import React from 'react'
import {View, StyleSheet} from 'react-native';

const HeaderButton = ({}) => {
  return (<TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', }}>
    <View style={{ borderWidth: 1, borderRadius: 50, borderColor: '#d9d9d9', padding: 10 }}>
      <Ionicons name={iconName} size={22} color='black' />
  
    </View>
  </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
 container: {},
});

export default HeaderButton;