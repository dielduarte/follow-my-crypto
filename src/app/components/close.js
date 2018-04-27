import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { S3_PATH } from '../constants';

const Close = ({
  onPress
}) => {
  const IMAGE_PATH = `${S3_PATH}/close.png`;
  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image 
        source={{ uri: IMAGE_PATH }} 
        style={styles.close}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  close: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 30,
    resizeMode: 'contain',
    right: 0,
    position: 'absolute',
    zIndex: 2
  }
});

export default Close;