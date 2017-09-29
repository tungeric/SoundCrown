import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import UserPageMain from './user_page_main';
import { getAllUserTracks } from '../../../actions/track_actions';
import { getUser, updateUser } from '../../../actions/user_actions';

const mapStateToProps = (state, props) => {
  return{
    currentUser: state.session.currentUser,
    tracks: Object.values(state.tracks),
    user: Object.values(state.users)[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getUser: (username) => dispatch(getUser(username)),
    getAllUserTracks: (id) => dispatch(getAllUserTracks(id)),
    updateUser: (username, user) => dispatch(updateUser(username, user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPageMain));
