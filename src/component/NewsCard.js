import React from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'
import moment from 'moment'

const ScreenArea = styled.View`
	align-items: center;
	background-color: #fff;
	border-bottom-width: 1px;
	border-bottom-color: #efefef;
	padding-top: 15px;
	padding-bottom: 15px;
`

const Area = styled.View`
	flex-direction: row;
`

const TimeArea = styled.View`
	flex-direction: row;
	align-self: flex-end;
	justify-content: center;
	align-items: center;
`

const CategoryLabel = styled.Text`
	color: #04000b;
	flex: 1;
	flex-wrap: wrap;
	font-size: 14px;
`

export default class NewsCard extends React.Component {
	render() {
		const { title, imageUrl, time } = this.props

		return (
			<ScreenArea>
				<Area>
					<Image
						style={{
							width: imageUrl === null ? 0 : 90,
							height: imageUrl === null ? 0 : 70,
							marginRight: imageUrl === null ? 0 : 10
						}}
						source={require('../assets/icons/icons.png')}
					/>
					<CategoryLabel>{title ? title : 'No Title'}</CategoryLabel>
				</Area>
				<TimeArea>
					<Text
						style={{
							color: '#FF6666',
							marginLeft: 5,
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
