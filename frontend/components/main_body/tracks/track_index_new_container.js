import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { getAllNewTracks } from '../../../actions/track_actions';
import TrackIndexNew from './track_index_new';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackIndexNew));
