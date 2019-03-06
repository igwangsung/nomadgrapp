import React, { Component } from 'react';
import LogInScreen from './presenter';
import { Alert } from 'react-native';
class Container extends Component {
	state = {
		isSubmitting: false,
		username: '',
		password: '',
	};

	static navigationOptions = ({ navigation }) => ({
		header: null,
	});

	render() {
		return (
			<LogInScreen
				{...this.state}
				changePassword={this._changePassword}
				changeUsername={this._changeUsername}
				submit={this._submit}
			/>
		);
	}

	_changeUsername = text => {
		this.setState({
			username: text,
		});
	};

	_changePassword = text => {
		this.setState({
			password: text,
		});
	};

	_submit = async () => {
		const { username, password, isSubmitting } = this.state;
		const { login } = this.props;
		if (!isSubmitting) {
			if (username && password) {
				this.setState({
					isSubmitting: true,
				});
				//redux action
				const loginResult = await login(username, password);
				if (!loginResult) {
					Alert.alert('Something went wrong, try again');
					this.setState({
						isSubmitting: false,
					});
				}
			} else {
				Alert.alert('All fields are required');
			}
		}
	};
}

export default Container;
