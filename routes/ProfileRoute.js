import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';
const ProfileRoute = createStackNavigator(
	{
		Profile: {
			screen: ProfileScreen,
			//(props)=>({
			// 	headerTitle: props.screenProps.username,
			// })
			navigationOptions: ({ screenProps }) => ({
				headerTitle: screenProps.username,
			}),
		},
		...sharedRoutes,
	},
	{
		...sharedOptions,
	}
);

export default createAppContainer(ProfileRoute);
