import React, { Component } from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'
import { Ionicons, Entypo, FontAwesome , MaterialIcons} from '@expo/vector-icons'

import NewsCardUI from '../component/NewsCardUI'
import { API_KEY } from '../assets/api.data'

const ViewArea = styled.View`
	background-color: ${props => props.theme.colors.background};
	flex: 1;
`

const NewsArea = styled.View`
	flex-direction: row;
	padding-left: 50px;
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
				this.setState({ topNews: responseJson })
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
				this.setState({ business: responseJson })
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
				this.setState({ entertainment: responseJson })
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
				this.setState({ health: responseJson })
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
				this.setState({ sports: responseJson })
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
				this.setState({ technology: responseJson })
			})
			.catch(error => {
				console.error(error)
			})
	}

	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<ViewArea>
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
								this.state.topNews.articles.map(
									(data, index) => (
										<NewsCardUI
											key={index}
											title={data.title}
											imageUrl={data.urlToImage}
										/>
									)
								)}
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
								this.state.business.articles.map(
									(data, index) => (
										<NewsCardUI
											key={index}
											title={data.title}
											imageUrl={data.urlToImage}
										/>
									)
								)}
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
								this.state.entertainment.articles.map(
									(data, index) => (
										<NewsCardUI
											key={index}
											title={data.title}
											imageUrl={data.urlToImage}
										/>
									)
								)}
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
								this.state.health.articles.map(
									(data, index) => (
										<NewsCardUI
											key={index}
											title={data.title}
											imageUrl={data.urlToImage}
										/>
									)
								)}
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
								this.state.sports.articles.map(
									(data, index) => (
										<NewsCardUI
											key={index}
											title={data.title}
											imageUrl={data.urlToImage}
										/>
									)
								)}
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
								this.state.technology.articles.map(
									(data, index) => (
										<NewsCardUI
											key={index}
											title={data.title}
											imageUrl={data.urlToImage}
										/>
									)
								)}
						</NewsArea>
					</ScrollView>
				</ViewArea>
			</ScrollView>
		)
	}
}
