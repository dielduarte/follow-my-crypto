import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import CryptInfo from './components/crypto-info';
import DataService from './services/data-service';
import { StatusBarBackground } from './components/status-bar';
import LinearGradient from 'react-native-linear-gradient';
import styles from './app.styles';
import Search from './components/search';
import CryptoList from './components/cryptoList';
import Loading from './components/loading';
import CryptoDetails from './components/cryptoDetails';


import LottieView from 'lottie-react-native';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cryptos: [],
      filter: "",
      regexp: new RegExp(''),
      cryptoSelected: {},
      showDetails: false
    }
  }

  componentDidMount() {
    DataService.GET().then((e) => {
      this.setState({ cryptos: e.data });
    });
  }

  filter(t) {
    this.setState({
      regexp: new RegExp(t, "ig")
    });
  }

  onSelected = (cryptoSelected) => {
    this.setState({
      cryptoSelected,
      showDetails: true
    })
  }

  render() {
    const { cryptos, showDetails, cryptoSelected } = this.state;

    return (
      <LinearGradient colors={['#4ECDC4', '#556270']} style={styles.container}>
        <StatusBarBackground />
        <Search />
        <Loading showLoading={isEmpty(cryptos)} />      
        <CryptoList cryptos={cryptos} onSelected={this.onSelected} />
        {showDetails && <CryptoDetails crypto={cryptoSelected}/>}
      </LinearGradient>
    );
  }
}