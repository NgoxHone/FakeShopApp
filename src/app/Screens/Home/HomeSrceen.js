import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getApi} from '../../Api/Api';
import {MAX_H, MAX_W} from '../../Common/GlobalStyles';
import {RootNavigation} from '../../Common/RootNavigation';

const HomeSrceen = () => {
  const [data, setData] = useState(null);
  const getFakeData = async () => {
    await getApi('https://fakestoreapi.com/products').then(res => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const Item = ({item}) => (
    <TouchableOpacity
      onPress={() => RootNavigation.navigate('DetailProduct', {data: item})}
      activeOpacity={0.6}
      style={styles.item}>
      <Image
        resizeMode="center"
        style={styles.Image}
        source={{uri: item?.image}}
      />
      {/* <View style={{height: 0.5, backgroundColor: '#cccc', width: '80%',alignSelf:'center',marginTop:5}} /> */}
      <Text style={styles.title}>{limitTextLength(item?.title, 25)}</Text>
      <Text style={[{fontWeight: 'bold', textAlign: 'center'}]}>
        {item?.price}$
      </Text>
    </TouchableOpacity>
  );
  useEffect(() => {
    getFakeData();
  }, []);
  function limitTextLength(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  }
  // console.log(data)
  return (
    <ScrollView style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20, margin: 10}}>
        Demo App
      </Text>
      <Image
        style={{margin: 10, width: MAX_W - 20, height: 300, borderRadius: 20}}
        source={{
          uri: 'https://cl-wpml.s3.ap-southeast-1.amazonaws.com/cam-nang-viec-lam/wp-content/uploads/2023/02/28141652/3692229-1-1024x1024.jpg',
        }}
      />

      {/* <Text>{data[0].title}</Text> */}
      {data != null && (
        <View style={{flex: 1}}>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            contentContainerStyle={{
              // justifyContent: 'center',
              // alignItems: 'center',
              marginHorizontal: 10,
            }}
            data={data}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default HomeSrceen;

const styles = StyleSheet.create({
  container: {flex: 1},
  item: {
    backgroundColor: 'white',
    padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    borderRadius: 15,
    width: MAX_W * 0.45,
    alignSelf: 'center',
    height: MAX_H * 0.2,
    margin: 5,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
  Image: {
    height: 70,
    width: 60,
    alignSelf: 'center',
  },
});
