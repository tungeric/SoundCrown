import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  console.log(currentUser);
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});

export const signup = (user) => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(response => {
      dispatch(receiveCurrentUser(response));
      location.hash="/";
    },
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };

export const login = (user) => dispatch => {
  return SessionAPIUtil.login(user)
    .then(response => {
      dispatch(receiveCurrentUser(response));
      location.hash="/";
    },
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
  };

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(response => {
      dispatch(receiveCurrentUser(null));
      location.hash="/";
    });
  };
