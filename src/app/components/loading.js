import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

class Loading extends PureComponent {
  handleViewRef = ref => this.loadingContainer = ref;

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Animatable.View
        ref={this.handleViewRef}
        style={styles.loading}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../assets/lottieFiles/loading.json')}
          loop={true}
        />
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1
  }
});

export default Loading;