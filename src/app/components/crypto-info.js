import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { CurrencyFormat } from '../services/utilities-service';

export default class CryptoInfo extends Component {

    render() {  
        return (
            <Card
                title={`${this.props.crypto.symbol} - ${this.props.crypto.name}`}
                titleStyle={styles.title}
                style={styles.container}>
                <Text>R$ {CurrencyFormat(parseFloat(this.props.crypto.price_brl).toFixed(2))}</Text>
                <Text>$ {CurrencyFormat(parseFloat(this.props.crypto.price_usd).toFixed(2))}</Text>
                <Text style={{marginTop: '8%', marginBottom: '3%'}}>Variação:</Text>
                <Text>1 hora: <Text style={{color: this._getColor(this.props.crypto.percent_change_1h)}}>{this.props.crypto.percent_change_1h}</Text> %</Text>
                <Text>1 dia: <Text style={{color: this._getColor(this.props.crypto.percent_change_24h)}}>{this.props.crypto.percent_change_24h}</Text> %</Text>
                <Text>1 semana: <Text style={{color: this._getColor(this.props.crypto.percent_change_7d)}}>{this.props.crypto.percent_change_7d}</Text> %</Text>
            </Card>
        )
    }

    _getColor(value){
        return value > 0 ? 'green' : 'red';
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'left'
    },
    card: {

    }
});
