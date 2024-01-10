import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TopNavigation from '../../Components/TopNavigation';
import {RootNavigation} from '../../Common/RootNavigation';
import {useRoute} from '@react-navigation/native';
import {MAX_H, MAX_W} from '../../Common/GlobalStyles';
import {AppColors} from '../../Common/AppColor';

const DetailProduct = () => {
  const data = useRoute().params.data;
  console.log(data);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <TopNavigation title={data.title} navigation={RootNavigation} />
      <Image
        resizeMode="center"
        style={{width: MAX_W, height: MAX_H * 0.4}}
        source={{uri: data.image}}
      />
      <View style={{margin: 10}}>
        <Text style={{fontWeight: 'bold'}}>{data.title}</Text>
        <Text style={{fontWeight: 'normal'}}>{data.price}$</Text>
        <Text style={{fontWeight: 'normal'}}>{data.description}$</Text>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: '#48bf02',
          padding: 10,
          paddingHorizontal: 30,
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Add to cart
          </Text>
          <Image
            resizeMode="center"
            style={{width: 20, height: 20}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/7835/7835563.png',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({});
