import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      renderInput: false
    };

    this.open = false;
  }

  handleViewRef = ref => (this.inputSearch = ref);

  startAnimation = () => {
    if (!this.open) {
      !this.state.renderInput && this.setState({ renderInput: true });
      this.open = true;

      Animated.timing(this.state.progress, {
        toValue: 0.6,
        duration: 800
      }).start();

      this.inputSearch.bounceInRight(1000);
      return;
    }

    this.open = false;
    this.inputSearch.bounceOutRight(900);

    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 800
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View />
        <Animatable.View ref={this.handleViewRef} style={styles.inputContainer}>
          {this.state.renderInput && (
            <TextInput
              style={styles.input}
              onChangeText={text => this.props.filter(text)}
              autoFocus={true}
            />
          )}
        </Animatable.View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <View>
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              source={require("../assets/lottieFiles/search.json")}
              style={styles.animation}
              loop={false}
              progress={this.state.progress}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 25
  },
  animation: {
    right: 5,
    top: 5,
    width: 25,
    height: 25
  },
  inputContainer: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    top: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '90%',
    color: 'white',
    fontWeight: '200'
  }
});
