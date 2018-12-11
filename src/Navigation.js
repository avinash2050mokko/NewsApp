import React from 'react'
import {
	createStackNavigator,
	createDrawerNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createMaterialTopTabNavigator
} from 'react-navigation'
import { Text, TouchableOpacity } from 'react-native'

import HomeScreen from './screen/HomeScreen'

/* Tab bar goes here */
const WorldTab = createMaterialTopTabNavigator(
	{
		Home: HomeScreen,
		US: HomeScreen,
		Uk: HomeScreen
	},
	{
		lazyLoad: true,
		initialRouteName: 'Home',
		tabBarOptions: {
			scrollEnabled: true,
			style: {
				backgroundColor: '#2a2d36'
			},
			labelStyle: {
				fontSize: 12
			},

			indicatorStyle: {
				backgroundColor: '#a2a2a3'
			}
		}
	}
)

/* Drawer Layout goes here*/
const AppDrawer = createDrawerNavigator(
	{
		Home: {
			screen: WorldTab
		},
		Sources: {
			screen: WorldTab
		}
	},
	{
		drawerPosition: 'left',
		initialRouteName: 'Home',
		drawerBackgroundColor: '#2a2d36',
		contentOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#555',
			itemsContainerStyle: {
				marginVertical: 0
			},
			iconContainerStyle: {
				opacity: 1
			}
		}
	}
)

// Drawer Icons
const MenuIcon = ({ navigation }) => {
	if (!navigation.state.isDrawerOpen) {
		return (
			<HeaderButton
				icon="ios-menu"
				onPress={() => navigation.openDrawer()}
			/>
		)
	}
}

const WorldStack = createStackNavigator(
	{
		//important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

		AppDrawer: {
			screen: AppDrawer
		}
	},
	{
		navigationOptions: ({ navigation }) => ({
			title: 'ReactNavigation', // Title to appear in status bar
			headerLeft: (
				<TouchableOpacity
					onPress={() => {
						navigation.dispatch(DrawerActions.toggleDrawer())
					}}
				>
					<Text>Menu</Text>/>
				</TouchableOpacity>
			),
			headerStyle: {
				backgroundColor: '#333'
			},
			headerTintColor: '#0ff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		})
	}
)

export default createAppContainer(WorldStack)
