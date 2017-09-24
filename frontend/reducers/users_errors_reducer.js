import { merge } from 'lodash';
import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';

const _noErrors = [];

const UsersErrorsReducer = (state = _noErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return _noErrors;
    case RECEIVE_ALL_USERS:
      return _noErrors;
    default:
      return state;
  }
};

export default UsersErrorsReducer;
