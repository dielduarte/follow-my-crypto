import React, { Component } from 'react';
import { ScrollView, RefreshControl, StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import FetchCoins from '../services/crypto-service';
import CryptInfo from '../components/crypto-info';
import { StatusBarBackground } from './status-bar';
import { SearchBar } from 'react-native-elements';

export class CryptoContainer extends Component {

    constructor() {
        super();
        this.state = {
            cryptos: [],
            filter: "",
            regexp: new RegExp('')
        }
    }

    filter(t) {
        this.setState({
            regexp: new RegExp(t, "ig")
        });
    }

    _onRefresh() {
        this.props.FetchCoins();
    }

    render() {
        const { crypto } = this.props;

        return (
            <View>
                <StatusBarBackground />
                <SearchBar
                    round
                    onChangeText={this.filter.bind(this)}
                    onClearText={() => { }}
                    placeholder='Pesquisar...' />
                <ScrollView refreshControl=
                    {
                        <RefreshControl
                            refreshing={crypto.isFetching}
                            onRefresh={this._onRefresh.bind(this)} />
                    }>
                    <View>                        
                        <View>
                            {
                                (() => {
                                    return (crypto.data.filter((crypto) => {
                                        return this.state.regexp.test(crypto.name);
                                    }).map((coin, index) => {
                                        return (
                                            <View key={index}>
                                                <CryptInfo crypto={coin} />
                                            </View>
                                        )
                                    }))
                                })()
                            }
                        </View>



                    </View>
                </ScrollView>
            </View>
        );
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
