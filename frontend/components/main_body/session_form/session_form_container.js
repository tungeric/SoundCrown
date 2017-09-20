import { connect } from 'react-redux';
import { login, signup } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = ({session, errors}, {location}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors, 
  formType: ( location ? location.pathname.slice(1) : null )
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ( location ? ownProps.location.pathname.slice(1) : null );
  if (formType === 'login') {
    return {
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
