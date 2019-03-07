import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';
import { View } from 'react-native';
import React from 'react';
import HomeRoute from '../routes/HomeRoute';
import SearchRoute from '../routes/SearchRoute';
import NotificationRoute from '../routes/NotificationRoute';
import ProfileRoute from '../routes/ProfileRoute';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

//2개의 오브젝트가 필요함.
const TabNavigation = createBottomTabNavigator(
	{
		Home: {
			screen: HomeRoute,
			navigationOptions: {
				// tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={30} color={focused ? 'black' : 'grey'} />,
				tabBarIcon: ({ focused }) => (
					<MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={30} color="black" />
				),
				// swipeEnabled: true,
				// animationEnabled: true,
			},
		},
		Search: {
			screen: SearchRoute,
			navigationOptions: {
				tabBarIcon: ({ focused }) => (
					<Ionicons name="ios-search" size={30} color={focused ? 'black' : 'grey'} />
				),
			},
		},
		AddPhoto: {
			screen: View,
			navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ focused }) => <Ionicons name="ios-add-circle-outline" size={30} color="black" />,
				tabBarOnPress: () => {
					navigation.navigate('TakePhoto');
				},
			}),
		},
		Notification: {
			screen: NotificationRoute,
			navigationOptions: {
				tabBarIcon: ({ focused }) => (
					<Ionicons name={focused ? 'ios-heart' : 'ios-heart-empty'} size={30} color="black" />
				),
			},
		},
		Profile: {
			screen: ProfileRoute,
			navigationOptions: {
				tabBarIcon: ({ focused }) => <Ionicons name="md-person" size={30} color={focused ? 'black' : 'grey'} />,
			},
		},
	},
	{
		// tabBarComponent : ({ jumpToIndex, ...props , navigation }) => (
		// 	<TabBarBottom
		// 		{...props}
		// 		jumpToIndex={index => {
		// 			if (index === 2) {
		// 				navigation.navigate('TakePhoto');
		// 			} else {
		// 				jumpToIndex(index);
		// 			}
		// 		}}
		// 	/>
		// ),
		tabBarPosition: 'bottom',
		tabBarOptions: {
			showLabel: false,
			style: {
				backgroundColor: '#FBFBFB',
				height: 45,
			},
		},
		swipeEnabled: true,
		animationEnabled: true,
	}
);

export default TabNavigation;
