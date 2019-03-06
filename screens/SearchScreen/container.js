import React, { Component } from 'react';
import SearchScreen from './presenter';
import PropTypes from 'prop-types';
import SearchBar from '../../components/SearchBar';
class Container extends Component {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;

		return {
			headerTitle: <SearchBar submit={text => params.submitSearch(text)} />,
		};
	};
	static propTypes = {
		getEmptySearch: PropTypes.func.isRequired,
		searchHashtag: PropTypes.func.isRequired,
		search: PropTypes.array,
	};

	state = {
		searchingBy: '',
		isFetching: false,
	};

	componentDidMount() {
		const { navigation } = this.props;
		navigation.setParams({
			submitSearch: this._submitSearch,
		});
	}

	componentWillReceiveProps = nextProps => {
		if (nextProps.search) {
			this.setState({
				isFetching: false,
			});
		}
	};
	render() {
		return <SearchScreen refresh={this._refresh} {...this.state} {...this.props} />;
	}

	_submitSearch = text => {
		const { searchingBy } = this.state;
		const { searchHashtag, getEmptySearch } = this.props;
		if (text === '') {
			getEmptySearch();
		} else {
			//call api and search by hashtag
			searchHashtag(text);
		}
		this.setState({
			searchingBy: text,
			isFetching: true,
		});
	};

	_refresh = () => {
		const { searchingBy } = this.state;
		const { getEmptySearch, searchHashtag } = this.props;
		if (searchingBy === '') {
			getEmptySearch();
		} else {
			searchHashtag(searchingBy);
		}
	};
}

export default Container;
