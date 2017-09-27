import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUser = (username) => dispatch => {
  return UserApiUtil.getUser(username)
    .then( response => dispatch(receiveUser(response)),
           errors => dispatch(receiveUserErrors(errors.responseJSON)));
};

export const getAllUsers = () => dispatch => {
  return UserApiUtil.getAllUsers()
    .then( response => dispatch(receiveUser(response)),
           errors => dispatch(receiveUserErrors(errors.responseJSON)));
};

export const updateUser = (username, user) => dispatch => {
  console.log(user);
  return UserApiUtil.updateUser(username, user)
    .then( response => dispatch(receiveUser(response)),
           errors => dispatch(receiveUserErrors(errors.responseJSON)));
};
