import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default ({ icon, library, ...rest }) => {
	return (
		<TouchableOpacity {...rest} style={{ justifyContent: 'center' }}>
			<Ionicons
				color="white"
				name={icon}
				size={24}
				style={{ width: 48, textAlign: 'center' }}
			/>
		</TouchableOpacity>
	)
}
