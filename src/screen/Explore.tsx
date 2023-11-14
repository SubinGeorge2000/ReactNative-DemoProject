import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Explore() {
  return (
    <View style={styles.explore}>
      <Text>Explore Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  explore: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
