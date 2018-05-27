import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import CryptInfo from './components/crypto-info';
import DataService from './services/data-service';
import { StatusBarBackground } from './components/status-bar';
import LinearGradient from 'react-native-linear-gradient';
import styles from './app.styles';
import Search from './components/search';
import CryptoList from './components/cryptoList';
import Loading from './components/loading';
import LottieView from 'lottie-react-native';
import CryptoDetails from './components/cryptoDetails';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			cryptos: [],
			filter: '',
			cryptosFiltered: [],
			cryptoSelected: {},
			showDewtails: false,
			regexp: new RegExp('')
		};
	}

	componentDidMount() {
		DataService.GET().then(e => {
			this.setState({ cryptos: e.data });
		});
	}

	filter = t => {
		const regex = new RegExp(t, 'ig');
		const { cryptos } = this.state;

		cryptos.forEach((crypto, index) => {
			crypto.hidden = !regex.test(crypto.name);
		});
		let cryptosShown = cryptos.filter(item => !item.hidden);
		this.setState({
			cryptosFiltered: cryptosShown
		});
	};

	onSelected = cryptoSelected => {
		this.setState({
			cryptoSelected,
			showDetails: true
		});
	};

	toggleDetails = () => {
		this.setState(current => {
			return {
				showDetails: !current.showDetails
			};
		});
	};

	render() {
		const { cryptos, showDetails, cryptoSelected, cryptosFiltered } = this.state;

		return (
			<LinearGradient colors={['#4ECDC4', '#556270']} style={styles.container}>
				<StatusBarBackground />
				<Search
					filter={text => {
						this.filter(text);
					}}
				/>
				<Loading showLoading={isEmpty(cryptos)} />
				<CryptoList
					cryptos={cryptosFiltered.length > 0 ? cryptosFiltered : cryptos}
					onSelected={this.onSelected}
				/>
				{showDetails && <CryptoDetails crypto={cryptoSelected} onClose={() => this.toggleDetails()} />}
			</LinearGradient>
		);
	}
}
