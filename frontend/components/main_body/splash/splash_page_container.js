import { connect } from 'react-redux';
import { logout, login } from '../../../actions/session_actions';
import SplashPage from './splash_page';
import { getAllTopTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, props) => {
  return {
    tracks: state.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    getAllTopTracks: () => dispatch(getAllTopTracks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
