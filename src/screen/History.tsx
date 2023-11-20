import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../api';
import {useSelector} from 'react-redux';

export default function History() {
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
  const [addToCartItem, setAddToCartItem] = useState<Props[]>([]);
  const fetchItemById = async () => {
    try {
      list.forEach(async (item: any) => {
        const data = await fetchData(
          `https://jsonplaceholder.org/posts/${item}`,
        );
        setAddToCartItem(prev => [...prev, data.data]);
      });
    } catch (e) {
      ToastAndroid.show('Error while fetching data', ToastAndroid.SHORT);
    }
  };
  useEffect(() => {
    fetchItemById();
    return setAddToCartItem([]);
  }, [list]);

  const renderItem = ({item}: DataItem) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item?.image,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.title.substring(0, 10)}</Text>
          <Text style={styles.text}>From</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.category.substring(0, 10)}</Text>
          <Text style={styles.text}>${item.userId}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.history}>
      <Text>Add to Cart</Text>
      <FlatList
        style={styles.list}
        data={addToCartItem}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 15,
  },
  itemContainer: {
    marginRight: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    minHeight: 100,
    maxHeight: 500,
    marginBottom: 10,
  },
  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
