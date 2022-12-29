import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import CategoriesView from './CategoriesView';

const Categories = ({navigation, onPressone, onPresstwo}) => {
  return (
    <View style={styles.mainView}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CategoriesView icon={'globe'} text={'world'} onPress={onPressone} />
        <CategoriesView icon={'sun'} text={'Weather'} onPress={onPresstwo} />
        <CategoriesView icon={'code'} text={'Programming'} />
        <CategoriesView icon={'play'} text={'videos'} />
        <CategoriesView icon={'airplay'} text={'Games'} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    marginLeft: 6,
    padding: 10,
    width: '100%',
    height: 60,
  },
  categoryItem: {
    flexDirection: 'row',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#eaeaea',
    borderColor: '#c2c2c2',
    borderRadius: 30,
    width: 120,
    height: 40,
  },
});

export default Categories;
