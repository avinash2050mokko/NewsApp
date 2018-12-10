import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import styled from 'styled-components'

import HeaderButton from '../component/HeaderButton'
import NewsCard from '../component/NewsCard'
import { API_KEY } from '../assets/api.data'

const ViewArea = styled.View`
	flex: 1;
	padding: 16px;
`

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

	state = { countryCode: undefined, data: undefined }

	componentDidMount() {
		fetch(
			`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ data: responseJson })
			})
			.catch(error => {
				console.error(error)
			})
	}

	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<ViewArea>
					{this.state.data !== undefined &&
						this.state.data.articles.map((data, index) => (
							<NewsCard
								title={data.title}
								imageUrl={data.urlToImage}
								time={data.publishedAt}
							/>
						))}
				</ViewArea>
			</ScrollView>
		)
	}
}
