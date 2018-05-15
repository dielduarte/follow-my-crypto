import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';
import CryptoIcon from './cryptoIcon';

const CryptoListItem = ({ crypto, onClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onClick()}>
      <View style={styles.itemContainer} >
        <CryptoIcon symbol={crypto.symbol} />
        <Text style={styles.symbol}>{crypto.symbol}</Text>
      </View>
    </TouchableWithoutFeedback>  
  )
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 20
  },
  symbol: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
    marginTop: 10
  }
});

export default CryptoListItem;