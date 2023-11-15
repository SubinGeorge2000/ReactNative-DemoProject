import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomModal from '../components/CustomModal';
import axios from 'axios';
export default function SelectedItem({route}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const {itemId} = route?.params;

  type Props = {
    id: number;
    category: string;
    content: string;
    image: string;
    publishedAt: string;
    slug: string;
    status: string;
    thumbnail: string;
    title: string;
    updatedAt: string;
    url: string;
    userId: number;
  };
  const [selectedItem, setSelectedItem] = useState<Props>();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.org/posts/${itemId}`)
      .then(res => setSelectedItem(res.data))
      .catch(e => console.log(e));
  }, [itemId]);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.item}>
          <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            selectedItemImageUrl={selectedItem?.image}
          />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={styles.imageView}
              source={{
                uri: selectedItem?.image,
              }}
            />
          </TouchableOpacity>
          <View style={styles.detailsView}>
            <Text style={styles.textFont}>
              {selectedItem?.title.substring(0, 10)}
            </Text>
            <Text>
              {`from $${
                selectedItem?.userId
              }/${selectedItem?.category.substring(0, 10)}`}
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
