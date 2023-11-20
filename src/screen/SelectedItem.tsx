import {
  Button,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomModal from '../components/CustomModal';
import {fetchData} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../reducers/index';

export default function SelectedItem({route}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const {itemId} = route?.params;

  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.list);
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
  const fetchItemById = async (itemId: number) => {
    try {
      const data = await fetchData(
        `https://jsonplaceholder.org/posts/${itemId}`,
      );
      setSelectedItem(data.data);
    } catch (e) {
      ToastAndroid.show('Error while fetching data', ToastAndroid.SHORT);
    }
  };
  useEffect(() => {
    fetchItemById(itemId);
  }, [itemId]);

  const onPressButton = (id: number) => {
    const _list = list?.length ? [...list] : [];
    _list.includes(id) ? _list : _list.push(id);
    dispatch(add({data: _list}));
    ToastAndroid.show('added successfully', ToastAndroid.SHORT);
  };
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
                uri: selectedItem?.image ?? '',
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
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Button
            onPress={() => onPressButton(selectedItem?.id ?? 0)}
            title="Add to Cart"
            color="#841584"
          />
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
