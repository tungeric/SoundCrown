import { connect } from 'react-redux';
import { login, signup } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = ({session, errors}, {location}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    processForm: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
