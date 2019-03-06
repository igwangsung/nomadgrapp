import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedScreen from './presenter';
import { Image } from 'react-native';
import NavButton from '../../components/NavButton';
class Container extends Component {
	// static navigationOptions = ({ navigation }) => ({
	// 	headerTitle: (
	// 		<Image source={require('../../assets/images/logo.png')} style={{ height: 35 }} resizeMode={'contain'} />
	// 	),
	// 	headerLeft: <NavButton iconName={'ios-camera'} onPress={() => navigation.navigate('TakePhoto')} />,
	// });
	static propTypes = {
		feed: PropTypes.array,
		refresh: PropTypes.func.isRequired,
	};
	state = {
		isFetching: false,
	};

	componentWillReceiveProps = nextProps => {
		if (nextProps.feed) {
			this.setState({
				isFetching: false,
			});
		}
	};

	render() {
		console.log(this.props);
		return <FeedScreen {...this.props} {...this.state} refresh={this._refresh} />;
	}

	_refresh = () => {
		const { refresh } = this.props;
		this.setState({
			isFetching: true,
		});
		refresh();
	};
}

export default Container;
