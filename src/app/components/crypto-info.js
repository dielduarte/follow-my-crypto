import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../assets/fonts/selection.json';

export default class CryptoInfo extends Component {

    render() {
        const Icon = createIconSetFromIcoMoon(icoMoonConfig);        
        return (
            // <Text>Chassrles</Text>
            <Card
                title={`${this.props.crypto.symbol} - ${this.props.crypto.name}`}
                titleStyle={styles.title}
                style={styles.container}>
                <Icon name={this.props.crypto.symbol} size={30} color="#900" />
                <Text>R$ {parseFloat(this.props.crypto.price_brl).toFixed(2)}</Text>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'left'
    },
    card: {

    }
});