import React from 'react'
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native';


const StatiaPage = ({ route }) => {
  const listing = route.params;

  
  return (
    <SafeAreaView>
      <View style={styles.PageAllContant}>

         <Image source={{ uri: listing.urlToImage }}  style={{ height: 230, borderRadius: 10 }} />
         <Text style={styles.title}>{listing.title}</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  PageAllContant: {
    padding:10,
  },
 
  title: {
    marginTop:15,
    fontSize: 18,
    fontWeight:'500'
 },
});

export default StatiaPage;