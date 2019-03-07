import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationScreen from './presenter';

class Container extends Component {
	static propTypes = {
		notifications: PropTypes.array,
		getNotifications: PropTypes.func.isRequired,
	};
	state = {
		isFetching: false,
	};
	static defaultProps = {
		notifications: [],
	};

	componentWillReceiveProps = nextProps => {
		if (nextProps.notifications) {
			this.setState({
				isFetching: false,
			});
		}
	};

	render() {
		return <NotificationScreen {...this.props} {...this.state} refresh={this._refresh} />;
	}

	_refresh = () => {
		const { getNotifications } = this.props;
		this.setState({
			isFetching: true,
		});
		getNotifications();
	};
}

export default Container;
