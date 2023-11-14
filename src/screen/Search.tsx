import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Search() {
  return (
    <View style={styles.search}>
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
