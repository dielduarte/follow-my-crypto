import React from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import CryptInfo from './components/crypto-info';
import { SearchBar } from 'react-native-elements';
import { StatusBarBackground } from './components/status-bar';
import { Store } from './state-management/store';
import { Provider } from 'react-redux';
import CryptoContainer from './components/crypto-container';
export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cryptos: [],
      filter: "",
      regexp: new RegExp(''),
      refreshing: false
    }
  }

  filter(t) {
    this.setState({
      regexp: new RegExp(t, "ig")
    });
  }

  render() {
    const txt = '&#xe9de;';
    return (
      <Provider store={Store}>
          <CryptoContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 25

  },
  cryptFont: {
  }
});
