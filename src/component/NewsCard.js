import React from 'react'
import {
	Image,
	Text,
	LayoutAnimation,
	Platform,
	UIManager,
	View
} from 'react-native'
import styled from 'styled-components'
import moment from 'moment'

const ScreenArea = styled.View`
	align-items: center;
	background-color: #2a2d36;
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

const CategoryLabel = styled.Text`
	color: #fff;
	flex: 1;
	flex-wrap: wrap;
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
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)

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
							marginRight: imageUrl === null ? 0 : 10
						}}
						source={{ uri: `${imageUrl}` }}
					/>
					<CategoryLabel>{title ? title : 'No Title'}</CategoryLabel>
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
					<Text
						style={{ color: '#ccc', fontSize: 12, marginTop: 20 }}
					>
						{description}
					</Text>
				</View>

				<TimeArea>
					<Text
						style={{
							color: '#2bc5b4',
							marginLeft: 5,
							marginTop: 3,
							fontSize: 10
						}}
					>
						{moment(time).fromNow()}
					</Text>
				</TimeArea>
			</ScreenArea>
		)
	}
}
