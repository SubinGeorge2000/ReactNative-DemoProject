import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function History() {
  return (
    <View style={styles.history}>
      <Text>History Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
