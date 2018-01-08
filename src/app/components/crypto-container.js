import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import FetchCoins from '../services/crypto-service';
import CryptInfo from '../components/crypto-info';

export class CryptoContainer extends Component {

    render() {
        const { crypto } = this.props;
        console.log('RENDER');
        return crypto.data.map((coin, index) => {
            return (
                <View key={index}>
                    <CryptInfo crypto={coin}/>
                </View>
            )
        })
    
    }

    componentDidMount() {
        this.props.FetchCoins();
    }

}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoins })(CryptoContainer);
