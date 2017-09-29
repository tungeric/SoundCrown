import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { getAllTopTracks } from '../../../actions/track_actions';
import { withRouter } from 'react-router-dom';
import TrackIndexTop from './track_index_top';

const mapStateToProps = (state, props) => {
  return{
    tracks: state.tracks,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getAllTopTracks: () => dispatch(getAllTopTracks())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackIndexTop));
