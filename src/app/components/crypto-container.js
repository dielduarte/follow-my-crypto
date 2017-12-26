import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

export class CryptoContainer extends Component {

    render() {
        return (
            <View>
                <Text>Conatinaer</Text>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer);
