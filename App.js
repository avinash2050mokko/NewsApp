import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import AppNavigator from './src/Navigation'
import appTheme from './src/theme'

export default class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={appTheme}>
				<AppNavigator />
			</ThemeProvider>
		)
	}
}
