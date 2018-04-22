import React, { PureComponent } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import CryptoListItem from './cryptoListItem';

class CryptoList extends PureComponent {
  render() {
    const { cryptos } = this.props;

    if (!cryptos.length) {
      return null;
    }

    return (
      <Animatable.View animation="bounceInUp">
        <FlatList 
          data={cryptos}
          renderItem={({ item, index }) => <CryptoListItem crypto={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.container}
          numColumns={3}
        />
      </Animatable.View>
    )
  } 
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  }
});

export default CryptoList;