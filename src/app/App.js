import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CryptInfo from './components/crypto-info';
import DataService from './services/data-service';
import { StatusBarBackground } from './components/status-bar';
import LinearGradient from 'react-native-linear-gradient';
import styles from './app.styles';
import Search from './components/search';

import LottieView from 'lottie-react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cryptos: [],
      filter: "",
      regexp: new RegExp(''),
      // fontLoaded: false
    }
  }

  componentDidMount() {
    DataService.GET().then((e) => {
      console.log(e);
      this.setState({ cryptos: e.data });
    });
  }

  filter(t) {
    this.setState({
      regexp: new RegExp(t, "ig")
    });
  }

  render() {
    return (
      <LinearGradient colors={['#4ECDC4', '#556270']} style={styles.container}>
        <StatusBarBackground />
        {/* <SearchBar
          round
          onChangeText={this.filter.bind(this)}
          onClearText={() => { }}
          placeholder='Pesquisar...' /> */}
        <Search />
        {/* <ScrollView>
          {
            this.state.cryptos.filter((crypto, index) => {
              return this.state.regexp.test(crypto.name);
            }).map((crypto, index) => {
              return <CryptInfo crypto={crypto} key={index}></CryptInfo>
            })
          }
        </ScrollView> */}
      </LinearGradient>
    );
  }
}