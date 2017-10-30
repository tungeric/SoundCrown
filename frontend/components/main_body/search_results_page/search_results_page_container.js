import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import UserPageMain from './user_page_main';
import { getSearchTracks } from '../../../actions/track_actions';
import { getUser, updateUser } from '../../../actions/user_actions';

const mapStateToProps = (state, props) => {
  return {
    trackData: props.trackData,
    currentUser: state.session.currentUser,
    tracks: Object.values(state.tracks),
    user: Object.values(state.users)[0]
    // user_tracks: Object.values(state.users)[0].tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getUser: (username) => dispatch(getUser(username)),
    getSearchTracks: (search) => dispatch(getSearchTracks(search)),
    updateUser: (username, user) => dispatch(updateUser(username, user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPageMain));
