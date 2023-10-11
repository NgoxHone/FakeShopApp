import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {MAX_H, MAX_W} from '../../Common/GlobalStyles';
import {useSafeArea} from 'react-native-safe-area-context';
import {AppColors} from '../../Common/AppColor';
const TopNavigation = ({navigation, title}) => {
  const safeArea = useSafeArea();

  return (
    <View style={[styles.container, {height: safeArea.top + 60}]}>
      <View
        style={{
          paddingTop: safeArea.top,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.BtnBack}>
          <Image
            style={{height: 23, width: 23}}
            source={require('../../../asset/Icons/back.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 10,color:AppColors.Gray}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    // width: MAX_W,
    // height: safeA,
    backgroundColor: 'white',
    justifyContent: 'center',
    zIndex: 100,
  },
  BtnBack: {
    marginLeft: MAX_W * 0.05,
    // position: 'absolute',
    backgroundColor: '#eeeeee',
    borderRadius: 20,
    padding: 3,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
