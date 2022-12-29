import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  view: {
    flex: 1,
  },
});

export default Screen;
