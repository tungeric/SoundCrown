import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { getAllNewTracks } from '../../../actions/track_actions';
import StreamPage from './stream_page';

const mapStateToProps = (state, props) => {
  return{
    tracks: state.tracks,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getAllNewTracks: () => dispatch(getAllNewTracks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamPage);
