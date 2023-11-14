import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Wardrobe() {
  return (
    <View style={styles.wardrobe}>
      <Text>Wardrobe Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wardrobe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
