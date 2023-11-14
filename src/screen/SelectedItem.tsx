import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {DummyData} from '../data/dummyData';
import CustomModal from '../components/CustomModal';
export default function SelectedItem({route}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const {itemId} = route?.params;

  const selectedItem = DummyData.find(item => item.id === itemId);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.item}>
          <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            selectedItem={selectedItem}
          />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={styles.imageView}
              source={{
                uri: selectedItem?.imageUrl,
              }}
            />
          </TouchableOpacity>
          <View style={styles.detailsView}>
            <Text style={styles.textFont}>{selectedItem?.shirtName}</Text>
            <Text>
              {`from $${selectedItem?.price}/${selectedItem?.category}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 140,
    backgroundColor: '#6c7a89',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  item: {
    height: 150,
    width: 325,
    zIndex: 1,
    backgroundColor: 'white',
    marginHorizontal: 35,
    marginTop: 60,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageView: {
    height: 110,
    width: 130,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  detailsView: {
    paddingRight: 40,
    paddingTop: 50,
    paddingLeft: 10,
  },
  textFont: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
});
