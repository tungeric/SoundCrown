import { RECEIVE_USER,
         RECEIVE_ALL_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_USER:
      const newUser = action.user || null;
      const newState = merge({}, oldState);
      if (newUser) {
        newState[newUser.username] = newUser;
      }
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
