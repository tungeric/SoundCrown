import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import SplashPage from './splash_page';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(undefined, mapDispatchToProps)(SplashPage);
