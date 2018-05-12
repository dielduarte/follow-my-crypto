import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import isEmpty from "lodash/isEmpty";
import CryptInfo from "./components/crypto-info";
import DataService from "./services/data-service";
import { StatusBarBackground } from "./components/status-bar";
import LinearGradient from "react-native-linear-gradient";
import styles from "./app.styles";
import Search from "./components/search";
import CryptoList from "./components/cryptoList";
import Loading from "./components/loading";

import LottieView from "lottie-react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cryptos: [],
      filter: "",
      regexp: new RegExp("")
    };
  }

  componentDidMount() {
    DataService.GET().then(e => {
      this.setState({ cryptos: e.data });
    });
  }

  filter(t) {
    this.setState({
      regexp: new RegExp(t, "ig")
    });
  }

  render() {
    const { cryptos } = this.state;

    return (
      <LinearGradient colors={["#4ECDC4", "#556270"]} style={styles.container}>
        <StatusBarBackground />
        <Search
          filter={text => {
            this.filter(text);
          }}
        />
        <Loading showLoading={isEmpty(cryptos)} />
        <CryptoList
          cryptos={cryptos.filter(crypto => {
            return (
              this.state.regexp.test(crypto.symbol) ||
              this.state.regexp.test(crypto.name)
            );
          })}
        />

        {/* <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://follow-my-crypto.s3-sa-east-1.amazonaws.com/images/xrp.png' }}
        /> */}
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
