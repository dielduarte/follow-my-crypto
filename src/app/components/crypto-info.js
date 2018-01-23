import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

export default class CryptoInfo extends Component {

    render() {  
        return (
            <Card
                title={`${this.props.crypto.symbol} - ${this.props.crypto.name}`}
                titleStyle={styles.title}
                style={styles.container}>
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
