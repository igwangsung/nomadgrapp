import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import PhotoRoute from '../routes/PhotoRoute';
import LibraryRoute from '../routes/LibraryRoute';

const AddPhotoNavigation = createMaterialTopTabNavigator(
	{
		Camera: {
			screen: PhotoRoute,
		},
		Library: {
			screen: LibraryRoute,
		},
	},
	{
		tabBarOptions: {
			style: {
				backgroundColor: '#bbb',
			},
			labelStyle: {
				fontSize: 14,
				fontWeight: '600',
			},
		},
	},

	{}
	// const AddPhotoNavigation = createBottomTabNavigator(
	//     {
	//         Camera:{
	//             screen:CameraScreen,
	//             navigationOptions:{
	//                 tabBarLabel:"Photo"
	//             }

	//         },
	//         Library:{
	//             screen:LibraryScreen,
	//             navigationOptions:{
	//                 tabBarLabel:"Library"
	//             }
	//         }

	//     }
);

export default createAppContainer(AddPhotoNavigation);

// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import CameraScreen from '../screens/CameraScreen';
// import LibraryScreen from '../screens/LibraryScreen';

// const AddPhotoNavigation = createBottomTabNavigator(
// 	{
// 		Camera: {
// 			screen: CameraScreen,
// 			navigationOptions: {
// 				tabBarLabel: 'Photo',
// 			},
// 		},
// 		Library: {
// 			screen: LibraryScreen,
// 			navigationOptions: {
// 				tabBarLabel: 'Library',
// 			},
// 		},
// 	},
// 	{
// 		tabBarPosition: 'top',
// 		swipeEnabled: true,
// 		animationEnabled: true,
// 		tabBarOptions: {
// 			showLabel: true,
// 			upperCaseLabel: true,
// 			activeTintColor: 'black',
// 			inactiveTintColor: '#bbb',
// 			style: {
// 				backgroundColor: 'white',
// 				alignItems: 'center',
// 			},
// 			labelStyle: {
// 				fontSize: 14,
// 				fontWeight: '600',
// 			},
// 			showIcon: false,
// 		},
// 	}
// );

// export default createAppContainer(AddPhotoNavigation);
