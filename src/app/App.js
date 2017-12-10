import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CryptInfo from './components/crypto-info';
import DataService from './services/data-service';
import { SearchBar } from 'react-native-elements';


export default class App extends React.Component {


  constructor() {
    super();
    this.state = {
      cryptos: [],
      filter: "",
      regexp: new RegExp(''),
      fontLoaded: false
    }
  }

  componentDidMount() {
    DataService.GET().then((e) => {
      this.setState({ cryptos: e.data });
    });

    // console.log(Icon);
  }

  async componentWillMount() {
    this.setState({ fontLoaded: true });
  }

  filter(t) {
    this.setState({
      regexp: new RegExp(t, "ig")
    });
  }

  render() {
    
    const txt = '&#xe9de;';
    return (
      <View>
        <SearchBar
          round
          onChangeText={this.filter.bind(this)}
          onClearText={() => { }}
          placeholder='Pesquisar...' />
        <ScrollView>
          {
            this.state.fontLoaded ? (
              this.state.cryptos.filter((crypto, index) => {
                return this.state.regexp.test(crypto.name);
              }).map((crypto, index) => {
                return <CryptInfo crypto={crypto} key={index}></CryptInfo>
              })
            ) : null
          }
        </ScrollView>
      </View>
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
