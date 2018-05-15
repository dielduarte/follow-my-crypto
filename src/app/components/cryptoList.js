import React, { PureComponent } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import CryptoListItem from './cryptoListItem';

class CryptoList extends PureComponent {
  render() {
    const { cryptos, onSelected } = this.props;

    if (!cryptos.length) {
      return null;
    }

    return (
      <Animatable.View animation="bounceInUp">
        <FlatList 
          data={cryptos}
          renderItem={({ item, index }) => <CryptoListItem crypto={item} onClick={() => onSelected(item)} />}
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
    marginTop: 0,
    paddingTop: 20,
    // backgroundColor: 'red'
  }
});

export default CryptoList;