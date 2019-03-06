import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Profile from '../../components/Profile';
class Container extends Component {
	static propTypes = {
		getOwnProfile: PropTypes.func.isRequired,
		profile: PropTypes.object.isRequired,
	};

	render() {
		const { profile, getOwnProfile } = this.props;
		return <Profile profileObject={profile} refresh={getOwnProfile} />;
	}
}

export default Container;
