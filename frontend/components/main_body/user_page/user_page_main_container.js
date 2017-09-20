import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import UserPageMain from './user_page_main';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(undefined, mapDispatchToProps)(UserPageMain);
