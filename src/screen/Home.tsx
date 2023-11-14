import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {DummyData} from '../data/dummyData';
import Header from '../components/Header';
import BottomTab from '../components/BottomTab';

export default function Home({navigation}: any) {
  const [searchItem, SetSearchItem] = useState('');
  type Props = {
    item: {
      id: number;
      shirtName: string;
      category: string;
      price: number;
      imageUrl: string;
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
              uri: item.imageUrl,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.shirtName}</Text>
            <Text style={styles.text}>From</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.category}</Text>
            <Text style={styles.text}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const onChangeSearch = (text: string) => {
    SetSearchItem(text);
  };

  const filtedDummyData = useMemo(() => {
    return DummyData?.filter(item =>
      item?.shirtName?.toLowerCase().includes(searchItem.toLocaleLowerCase()),
    );
  }, [searchItem, DummyData]);

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
      <BottomTab navigation={navigation} />
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
