import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HeaderButton from '../component/HeaderButton'

export default class HomeScreen extends Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		return {
			headerLeft: (
				<HeaderButton
					icon="ios-menu"
					onPress={() => navigation.openDrawer()}
				/>
			)
		}
	}

	render() {
		return (
			<View>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 24,
		height: 24
	}
})
