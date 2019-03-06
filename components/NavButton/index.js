import React from 'react';
import { PropTypes } from 'prop-types';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class NavButton extends React.Component {
	render() {
		return (
			<TouchableWithoutFeedback onPressOut={this.props.onPress}>
				<View style={styles.container}>
					<Ionicons name={this.props.iconName} color={'black'} size={30} />
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

NavButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	iconName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		// padding을 주면 손가락이 두꺼울때 사용자들이 정교하게 클릭하지 않아도 된다.
	},
});

export default NavButton;

// const NavButton = props => (
//   <TouchableWithoutFeedBack onPressOut={props.onPress}>
//     <View style={styles.container}>
//       <IonIcons name={this.props.iconName} size={30} />
//     </View>
//   </TouchableWithoutFeedBack>
// );

// NavButton.PropTypes = {
//   onPress:PropTypes.func.isRequired,
//   iconName:PropTypes.string.isRequired

// }
