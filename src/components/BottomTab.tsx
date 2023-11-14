import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

export default function BottomTab({navigation}: any) {
  return (
    <View style={styles.bottom}>
      <View style={styles.innerbottom}>
        <View style={{paddingTop: 3}}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Octicons name="search" color="white" size={25} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <MaterialCommunityIcons name="history" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Wardrobe')}>
            <MaterialCommunityIcons name="hanger" color="white" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
            <MaterialIcons name="explore" color="white" size={30} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <MaterialIcons name="account-circle" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: 50,
    width: '100%',
    backgroundColor: '#6c7a89',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  innerbottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
