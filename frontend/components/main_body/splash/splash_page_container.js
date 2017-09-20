import { connect } from 'react-redux';
import { logout, login } from '../../../actions/session_actions';
import SplashPage from './splash_page';

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(undefined, mapDispatchToProps)(SplashPage);
