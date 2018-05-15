import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { S3_PATH } from '../constants';

const getIconPath = (symbol) => {
  const IMAGE_NAME = symbol.toLowerCase();
  return `${S3_PATH}/${IMAGE_NAME}.png`;
};

const CyptoIcon = ({
  symbol,
  style
}) => {
  const IMAGE_PATH = getIconPath(symbol);

  return (
    <Image
      style={[styles.icon, style]}
      source={{ uri: IMAGE_PATH }}
    />
  ) 
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: 'contain'
  }
});

export default CyptoIcon;