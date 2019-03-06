import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

function mapDispatchToProps(dispatch, ownProps) {
	const {
		creator: { pk },
	} = ownProps;
	return {
		followUser: () => {
			return dispatch(userActions.followUser(pk));
		},
		unfollowUser: () => {
			return dispatch(userActions.unfollowUser(pk));
		},
	};
}

export default connect(
	null,
	mapDispatchToProps
)(Container);
