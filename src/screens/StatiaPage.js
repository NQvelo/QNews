import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native';

import HeaderButton from '../components/HeaderButton';

const StatiaPage = ({route, navigation}) => {
  const listing = route.params;

  return (
    <SafeAreaView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          paddingHorizontal: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <HeaderButton
          iconName="chevron-back-outline"
          onPress={() => navigation.goBack()}
        />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <HeaderButton iconName="bookmark-outline" />
          <HeaderButton iconName="arrow-redo-outline" />
        </View>
      </View>

      <View style={styles.PageAllContant}>
        <Image
          source={{uri: listing.urlToImage}}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{height: 230, borderRadius: 10}}
        />
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.desc}>{listing.content}</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  PageAllContant: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },

  title: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  desc: {
    marginTop: 20,
    fontSize: 14,
  },
});

export default StatiaPage;
