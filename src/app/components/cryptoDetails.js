import React, { PureComponent } from 'react';
import { View, Animated, Easing, Text, Image, StyleSheet } from 'react-native';
import { BlurView } from 'react-native-blur';
import * as Animatable from 'react-native-animatable';

import CryptoIcon from './cryptoIcon';
import Close from './close';

class CryptoDetails extends PureComponent {
	constructor() {
		super();

		this.state = {
			opacity: new Animated.Value(0)
		};
	}

	componentDidMount() {
		this.animationIn();
	}

	animationIn() {
		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: 300
		}).start();
	}

	animationOut() {
		Animated.timing(this.state.opacity, {
			toValue: 0,
			duration: 300
		}).start(() => this.props.onClose());
	}

	FormatMoney(number) {
		var decimalNumbers = 2,
			decimalSeparator = ',',
			numberSeparator = '.',
			signal = number < 0 ? '-' : '',
			integerNumber = String(parseInt((number = Math.abs(Number(number) || 0).toFixed(decimalNumbers)))),
			j = (j = integerNumber.length) > 3 ? j % 3 : 0;
		return (
			signal +
			(j ? integerNumber.substr(0, j) + numberSeparator : '') +
			integerNumber.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + numberSeparator) +
			(decimalNumbers
				? decimalSeparator +
				  Math.abs(number - integerNumber)
						.toFixed(decimalNumbers)
						.slice(2)
				: '')
		);
	}

	render() {
		const { crypto } = this.props;

		return (
			<Animated.View
				style={[
					{
						opacity: this.state.opacity
					},
					styles.absoluteComponent
				]}
			>
				<BlurView style={styles.absoluteComponent} blurType="light" blurAmount={7} />

				<Animatable.View animation="bounceInDown" delay={200} style={styles.centerView}>
					<CryptoIcon symbol={crypto.symbol} style={styles.icon} />
				</Animatable.View>

				<Animatable.View animation="fadeIn" delay={300} style={styles.centerView}>
					<Text style={styles.name}>{crypto.name}</Text>
					<Text style={styles.price}>R$ {this.FormatMoney(parseFloat(crypto.price_brl))}</Text>
				</Animatable.View>

				<Animatable.View animation="slideInRight" delay={300} duration={200} style={styles.closeContainer}>
					<Close onPress={() => this.animationOut()} />
				</Animatable.View>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	absoluteComponent: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	icon: {
		width: 100,
		height: 100,
		marginTop: 100
	},
	centerView: {
		alignItems: 'center'
	},
	name: {
		fontSize: 60,
		fontWeight: '200',
		color: 'white',
		marginTop: 10
	},
	price: {
		fontSize: 25,
		color: 'white',
		marginTop: 10
	},
	closeContainer: {
		right: 0,
		position: 'absolute',
		zIndex: 2
	}
});

export default CryptoDetails;
