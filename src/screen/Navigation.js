import React from 'react'
import {
	createStackNavigator,
	createDrawerNavigator,
	createAppContainer
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import { Image } from 'react-native'

import HomeScreen from './HomeScreen'

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				title: 'News'
			}
		}
	},
	{
		initialRouteName: 'Home'
	}
)

const AppDrawer = createDrawerNavigator(
	{
		Home: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'News'
				/*drawerIcon: (
					<Ionicons
						name="md-checkmark-circle"
						size={24}
						color="green"
					/>
				)*/
			}
		},
		Australia: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Australia'
			}
		},
		Bulgaria: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Bulgaria'
			}
		},
		Canada: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Canada'
			}
		},
		India: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'India'
			}
		},
		Malaysia: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Malaysia'
			}
		},
		Nigeria: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Nigeria'
			}
		},
		NewZealand: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'New Zealand'
			}
		},
		Philippines: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Philippines'
			}
		},
		RussianFederation: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Russian Federation'
			}
		},
		Singapore: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Singapore'
			}
		},
		SouthAfrica: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'South Africa'
			}
		},
		Ukraine: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'Ukraine'
			}
		},
		UnitedKingdom: {
			screen: AppNavigator,
			navigationOptions: {
				drawerLabel: 'United Kingdom'
			}
		}
	},
	{
		drawerPosition: 'left',
		initialRouteName: 'Home',
		drawerBackgroundColor: 'white'
	}
)

export default createAppContainer(AppDrawer)
