import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native';
type Props = {
  onChangeSearch: (text: string) => void;
};
function Header({onChangeSearch}: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.innerHeader}>
        <View>
          <EvilIcons name="navicon" color="white" size={50} />
        </View>
        <View>
          <FontAwesome name="github-square" color="white" size={50} />
        </View>
        <View>
          <MaterialCommunityIcons
            name="bell-badge-outline"
            color="white"
            size={50}
          />
        </View>
      </View>
      <View style={styles.searchHeader}>
        <View style={styles.innerSearch}>
          <View style={styles.searchButton}>
            <EvilIcons name="search" color="black" size={50} />
          </View>
          <ScrollView keyboardShouldPersistTaps={'handled'}>
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              onChangeText={onChangeSearch}
            />
          </ScrollView>
        </View>
        <View>
          <EvilIcons name="camera" color="black" size={50} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 190,
    backgroundColor: '#6c7a89',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  innerHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchHeader: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 40,
    marginTop: 20,
    borderRadius: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: 'gray',
    fontSize: 20,
  },
  innerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    paddingBottom: 12,
  },
});

export default Header;
