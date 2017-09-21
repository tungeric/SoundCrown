import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import UserPageMain from './user_page_main';
import { getAllUserTracks } from '../../../actions/track_actions';

const mapStateToProps = ({session, tracks}) => {
  return{
    currentUser: session.currentUser,
    tracks: Object.values(tracks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),

    getAllUserTracks: (id) => dispatch(getAllUserTracks(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageMain);
