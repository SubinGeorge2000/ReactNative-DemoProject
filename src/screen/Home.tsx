import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Header from '../components/Header';
import {fetchData} from '../api';

export default function Home({navigation}: any) {
  const [data, setData] = useState<any>([]);

  const [searchItem, SetSearchItem] = useState('');

  const fetch = async () => {
    try {
      const data = await fetchData('https://jsonplaceholder.org/posts');
      setData(data.data);
    } catch (e) {
      console.log('error', Object.assign({}, e));
      ToastAndroid.show('Error while fetching data', ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  const navigateToSelectedItem = (id: number) => {
    navigation.navigate('SelectedItem', {
      itemId: id,
    });
  };
  const renderItem = ({item}: DataItem) => {
    return (
      <TouchableOpacity
        onPress={() => navigateToSelectedItem(item.id)}
        style={styles.container}
        key={item.id}>
        <View>
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
      </TouchableOpacity>
    );
  };

  const onChangeSearch = (text: string) => {
    SetSearchItem(text);
  };

  type PropsSlug = {
    title: string;
  };
  const filtedDummyData = useMemo(() => {
    return data?.filter((item: PropsSlug) =>
      item?.title?.toLowerCase().includes(searchItem.toLocaleLowerCase()),
    );
  }, [searchItem, data]);

  return (
    <View style={{flex: 1}}>
      <Header onChangeSearch={onChangeSearch} />
      <FlatList
        style={styles.list}
        data={filtedDummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 15,
  },
  container: {
    flex: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '100%',
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
