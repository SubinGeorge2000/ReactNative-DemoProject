import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

export default function Home({navigation}: any) {
  const [data, SetData] = useState([]);

  const [searchItem, SetSearchItem] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.org/posts')
      .then(res => {
        SetData(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  type Props = {
    item: {
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
  };
  const renderItem = ({item}: Props) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SelectedItem', {
            itemId: item.id,
          })
        }
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
