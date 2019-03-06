import { createStackNavigator, createAppContainer } from 'react-navigation';
import NotificationScreen from '../screens/NotificationScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';
const NotificationRoute = createStackNavigator(
	{
		Notification: {
			screen: NotificationScreen,
			navigationOptions: {
				headerTitle: 'Notification',
			},
		},
		...sharedRoutes,
	},
	{
		...sharedOptions,
	}
);

export default createAppContainer(NotificationRoute);
