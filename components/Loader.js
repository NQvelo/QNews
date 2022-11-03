import React from 'react'
import {View, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

function Loader() {
  return <View style={styles.container}>
    <Lottie source={require('../components/loading.json')} autoPlay loop />
   
</View>;
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    zIndex:1,
 },
});

export default Loader;