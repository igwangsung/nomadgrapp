import React, { Component } from 'react';
import Notification from './presenter';
import PropTypes from 'prop-types';
class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFollowing: props.creator.following,
		};
	}

	static propTypes = {
		followUser: PropTypes.func.isRequired,
		unfollowUser: PropTypes.func.isRequired,
	};
	render() {
		return <Notification handleFollowPress={this._handleFollowPress} {...this.props} {...this.state} />;
	}

	_handleFollowPress = () => {
		const { isFollowing } = this.state;
		const { followUser, unfollowUser } = this.props;

		if (isFollowing) {
			unfollowUser();
			this.setState({
				isFollwing: false,
			});
		} else {
			followUser();
			this.setState({
				isFollwing: true,
			});
		}
	};
}

export default Container;
