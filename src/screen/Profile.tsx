import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <View style={styles.profile}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
