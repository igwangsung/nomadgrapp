import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Profile from '../../components/Profile';

class Container extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.user.username,
	});
	constructor(props) {
		super(props);
		const {
			navigation: {
				state: {
					params: { user },
				},
			},
		} = props;
		this.state = {
			profileObject: user,
		};
	}

	componentDidMount = () => {
		// const { getProfile } = this.props;
		// const {
		// 	profileObject: { username },
		// } = this.state;
		// getProfile(username);
		this._getProfile();
	};
	render() {
		// const { profileObject } = this.state;
		// console.log(this.props);
		// return <Profile />;

		return <Profile {...this.state} refresh={this._getProfile} />;
	}

	_getProfile = async () => {
		const { getProfile } = this.props;
		const {
			profileObject: { username },
		} = this.state;
		const completeProfile = await getProfile(username);
		if (completeProfile.username) {
			this.setState({
				profileObject: completeProfile,
			});
		}
	};
}

export default Container;
