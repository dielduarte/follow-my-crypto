import React, { PureComponent } from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { BlurView } from 'react-native-blur';
import * as Animatable from 'react-native-animatable';

import CryptoIcon from './cryptoIcon';
import Close from './close';

class CryptoDetails extends PureComponent {
  constructor() {
    super();

    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.animationIn();
  }

  animationIn() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }

  animationOut() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: 500
      }
    ).start();
  }

  render() {
    const { crypto } = this.props;

    return (
      <Animated.View style={[{
          opacity: this.state.opacity, 
        },
        styles.absoluteComponent
      ]}>
        <BlurView
          style={styles.absoluteComponent}
          blurType="light"
          blurAmount={7}
        />

        <Animatable.View animation="slideInRight" delay={400} duration={300} style={styles.centerView}>  
          <Close onPress={() => this.animationOut()} />
        </Animatable.View>
          
      <Animatable.View animation="bounceInDown" delay={300} style={styles.centerView}>
          <CryptoIcon
            symbol={crypto.symbol}
            style={styles.icon}
          />
        </Animatable.View>

        <Animatable.View animation="fadeIn" delay={400} style={styles.centerView}>
          <Text style={styles.name}>{crypto.name}</Text>
          <Text style={styles.price}>R$ {parseFloat(crypto.price_brl).toFixed(2)}</Text>
        </Animatable.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  absoluteComponent: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 100
  },
  centerView: {
    alignItems: 'center'
  },
  name: {
    fontSize: 60,
    fontWeight: '200',
    color: 'white',
    marginTop: 10
  },
  price: {
    fontSize: 25,
    color: 'white',
    marginTop: 10
  }
});

export default CryptoDetails;