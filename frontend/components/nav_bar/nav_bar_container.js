import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { getAllTracks } from '../../../actions/track_actions';
import { getAllUsers } from '../../../actions/user_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  getAllTracks: () => dispatch(getAllTracks()),
  getAllUsers: () => dispatch(getAllUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
