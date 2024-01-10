import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MAX_W} from '../../Common/GlobalStyles';

const Splash = ({setVisible}) => {
  useEffect(() => {
    setTimeout(() => setVisible(true), 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={{
          uri: 'https://img.freepik.com/free-vector/blue-watercolor-splash_1035-8147.jpg',
        }}
      />
      <Text style={{marginTop: 20, fontWeight: 'bold'}}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Image: {
    width: MAX_W,
    height: 500,
  },
});
