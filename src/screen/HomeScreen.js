import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components'
import {
	Ionicons,
	Entypo,
	FontAwesome,
	MaterialIcons
} from '@expo/vector-icons'

import NewsCardUI from '../component/NewsCardUI'
import { API_KEY } from '../assets/api.data'

const ViewArea = styled.View`
	background-color: ${props => props.theme.colors.background};
	flex: 1;
`

const NewsArea = styled.View`
	flex-direction: row;
	padding-left: 35px;
`

const ScrollView = styled.ScrollView`
	background-color: ${props => props.theme.colors.background};
`

const CategoryBar = styled.View`
	flex-direction: row;
	align-items: center;
	margin: 15px 10px;
`
const Title = styled.Text`
	font-size: 18px;
	margin-left: 10px;
	font-weight: bold;
`

export default class HomeScreen extends Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		return {
			headerStyle: {
				backgroundColor: '#2a2d36',
				elevation: 0
			},
			headerTintColor: '#fff'
		}
	}
	state = {
		topNews: undefined,
		business: undefined,
		entertainment: undefined,
		health: undefined,
		sports: undefined,
		technology: undefined
	}

	componentDidMount() {
		/* Top News */

		fetch(
			`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ topNews: responseJson.articles.slice(0, 5) })
			})
			.catch(error => {
				console.error(error)
			})

		/* Business */
		fetch(
			`https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ business: responseJson.articles.slice(0, 5) })
			})
			.catch(error => {
				console.error(error)
			})

		/* Entertainment */
		fetch(
			`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					entertainment: responseJson.articles.slice(0, 5)
				})
			})
			.catch(error => {
				console.error(error)
			})

		/* Health */
		fetch(
			`https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ health: responseJson.articles.slice(0, 5) })
			})
			.catch(error => {
				console.error(error)
			})

		/* sports */
		fetch(
			`https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ sports: responseJson.articles.slice(0, 5) })
			})
			.catch(error => {
				console.error(error)
			})

		/* Health */
		fetch(
			`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ technology: responseJson.articles.slice(0, 5) })
			})
			.catch(error => {
				console.error(error)
			})
	}

	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<ViewArea>
					<StatusBar
						barStyle="light-content"
						hidden={false}
						translucent={true}
					/>

					{/* Top News */}
					<CategoryBar>
						<FontAwesome
							name={'newspaper-o'}
							size={22}
							color={'#FF69B4'}
						/>
						<Title>Trending News</Title>
					</CategoryBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<NewsArea>
							{this.state.topNews !== undefined &&
								this.state.topNews.map((data, index) => (
									<NewsCardUI
										key={index}
										title={data.title}
										imageUrl={data.urlToImage}
										url={data.url}
									/>
								))}
						</NewsArea>
					</ScrollView>

					{/*Business */}
					<CategoryBar>
						<Ionicons
							name={'md-business'}
							size={22}
							color={'#ac78f4'}
						/>
						<Title>Business News</Title>
					</CategoryBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<NewsArea>
							{this.state.business !== undefined &&
								this.state.business.map((data, index) => (
									<NewsCardUI
										key={index}
										title={data.title}
										imageUrl={data.urlToImage}
										url={data.url}
									/>
								))}
						</NewsArea>
					</ScrollView>

					{/* Entertainment */}
					<CategoryBar>
						<MaterialIcons
							name={'movie'}
							size={22}
							color={'#2ad8b7'}
						/>
						<Title>Entertainment News</Title>
					</CategoryBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<NewsArea>
							{this.state.entertainment !== undefined &&
								this.state.entertainment.map((data, index) => (
									<NewsCardUI
										key={index}
										title={data.title}
										imageUrl={data.urlToImage}
										url={data.url}
									/>
								))}
						</NewsArea>
					</ScrollView>

					{/* Health */}
					<CategoryBar>
						<Ionicons
							name={'ios-fitness'}
							size={22}
							color={'#69b4ff'}
						/>
						<Title>Health News</Title>
					</CategoryBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<NewsArea>
							{this.state.health !== undefined &&
								this.state.health.map((data, index) => (
									<NewsCardUI
										key={index}
										title={data.title}
										imageUrl={data.urlToImage}
										url={data.url}
									/>
								))}
						</NewsArea>
					</ScrollView>

					{/* Sport */}
					<CategoryBar>
						<MaterialIcons
							name={'directions-run'}
							size={22}
							color={'#8b668b'}
						/>
						<Title>Sport News</Title>
					</CategoryBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<NewsArea>
							{this.state.sports !== undefined &&
								this.state.sports.map((data, index) => (
									<NewsCardUI
										key={index}
										title={data.title}
										imageUrl={data.urlToImage}
										url={data.url}
									/>
								))}
						</NewsArea>
					</ScrollView>

					{/* Technology */}
					<CategoryBar>
						<FontAwesome
							name={'mobile'}
							size={22}
							color={'#8b668b'}
						/>
						<Title>Technology News</Title>
					</CategoryBar>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<NewsArea>
							{this.state.technology !== undefined &&
								this.state.technology.map((data, index) => (
									<NewsCardUI
										key={index}
										title={data.title}
										imageUrl={data.urlToImage}
										url={data.url}
									/>
								))}
						</NewsArea>
					</ScrollView>
				</ViewArea>
			</ScrollView>
		)
	}
}
