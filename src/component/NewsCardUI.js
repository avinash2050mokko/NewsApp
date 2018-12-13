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

const ScreenArea = styled.View`
	background-color: ${props => props.theme.colors.cardBackground};
	margin: 10px;
	border-radius: 7px;
`

const Area = styled.TouchableOpacity`
	background-color: #ffffff;
	border-radius: 7px;
`

const Title = styled.Text`
	color: ${props => props.theme.colors.textColor};
	flex-wrap: wrap;
	font-size: 12px;
`

export default class NewsCard extends React.Component {
	render() {
		const { title, imageUrl } = this.props

		return (
			<ScreenArea
				style={{
					height: 180,
					shadowColor: '#000',
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.7,
					shadowRadius: 2,
					elevation: 2
				}}
			>
				<Area>
					<Image
						style={{
							width: imageUrl === null ? 0 : 200,
							height: imageUrl === null ? 0 : 100,
							borderTopLeftRadius: 7,
							borderTopRightRadius: 7
						}}
						source={{ uri: `${imageUrl}` }}
					/>
					<Title
						style={{
							width: 180,
							height: 80,
							padding: 10
						}}
					>
						{title ? title : null}
					</Title>
				</Area>
			</ScreenArea>
		)
	}
}
