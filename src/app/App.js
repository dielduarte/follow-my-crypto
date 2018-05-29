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
			regexp: new RegExp(''),
			showLoading: true
		};
	}

	componentDidMount() {
		DataService.GET().then(e => {
			this.setState({ cryptos: e.data, showLoading: false });
		});
	}

	filter = t => {
		this.setState({ showLoading: true });
		const regex = new RegExp(t, 'ig');
		const { cryptos } = this.state;

		const cryptosFiltered =
			cryptos.map((crypto, index) => {
				crypto.hidden = !regex.test(crypto.name);
				return crypto;
			})
			.filter(crypto => !crypto.hidden);
		
		this.setState({ cryptosFiltered, showLoading: false });			
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
		const { 
			cryptos, 
			showDetails, 
			cryptoSelected, 
			cryptosFiltered, 
			showLoading 
		} = this.state;
	
		return (
			<LinearGradient colors={['#4ECDC4', '#556270']} style={styles.container}>
				<StatusBarBackground />
				<Search
					filter={text => {
						this.filter(text);
					}}
				/>
				{showLoading && <Loading />}
				{!showLoading && <CryptoList
					cryptos={cryptosFiltered.length > 0 ? cryptosFiltered : cryptos}
					onSelected={this.onSelected}
				/>}
				{showDetails && <CryptoDetails crypto={cryptoSelected} onClose={() => this.toggleDetails()} />}
			</LinearGradient>
		);
	}
}
