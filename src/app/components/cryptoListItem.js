import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const S3_PATH = 'https://follow-my-crypto.s3-sa-east-1.amazonaws.com/images/';

const CryptoListItem = ({ crypto }) => {
  const IMAGE_NAME = crypto.symbol.toLowerCase();
  const IMAGE_PATH = `${S3_PATH}${IMAGE_NAME}.png`;

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.icon} 
        source={{ uri: IMAGE_PATH }} 
      />
      <Text> {crypto.symbol} </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
    resizeMode: 'contain'
  }
});

export default CryptoListItem;