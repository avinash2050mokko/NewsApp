import React from 'react'
import {
	Image,
	Text,
	LayoutAnimation,
	Platform,
	UIManager,
	View
} from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'

const ScreenArea = styled.View`
	align-items: center;
	background-color: ${props => props.theme.colors.background};
	border-bottom-width: 1px;
	border-bottom-color: #44464d;
	padding-top: 15px;
	padding-bottom: 15px;
`

const Area = styled.TouchableOpacity`
	flex-direction: row;
`

const TimeArea = styled.View`
	flex-direction: row;
	align-self: flex-end;
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	color: ${props => props.theme.colors.textColor};
	flex: 1;
	flex-wrap: wrap;
	font-size: 16px;
`
const SubTitle = styled.Text`
	color: ${props => props.theme.colors.subTextColor};
	margin-top: 20px;
	font-size: 14px;
`

export default class NewsCard extends React.Component {
	constructor() {
		super()

		this.state = {
			onLayoutHeight: 0,
			modifiedHeight: 0,
			expanded: false,
			checked: 0
		}

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true)
		}
	}

	changeLayout = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

		if (this.state.expanded === false)
			this.setState({
				modifiedHeight: this.state.onLayoutHeight,
				expanded: true
			})
		else this.setState({ modifiedHeight: 0, expanded: false })
	}

	getViewHeight(height) {
		this.setState({ onLayoutHeight: height })
	}

	render() {
		const { title, imageUrl, time, description, content } = this.props

		return (
			<ScreenArea>
				<Area onPress={this.changeLayout}>
					<Image
						style={{
							width: imageUrl === null ? 0 : 90,
							height: imageUrl === null ? 0 : 70,
							marginRight: imageUrl === null ? 0 : 10,
							borderRadius: 4
						}}
						source={{ uri: `${imageUrl}` }}
					/>
					<Title>{title ? title : 'No Title'}</Title>
				</Area>

				{/*Expanded data */}
				<View
					style={{
						height: this.state.modifiedHeight,
						overflow: 'hidden',
						flexWrap: 'wrap'
					}}
					onLayout={event => this.getViewHeight(null)}
				>
					<SubTitle>{description}</SubTitle>
				</View>

				<TimeArea>
					<Text
						style={{
							color: '#2bc5b4',
							marginLeft: 5,
							marginTop: 3,
							fontSize: 12
						}}
					>
						{moment(time).fromNow()}
					</Text>
				</TimeArea>
			</ScreenArea>
		)
	}
}
