import { merge } from 'lodash';
import * as SessionAPIUtil from '../util/session_api_util';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const _noErrors = [];

const SessionErrorsReducer = (state = _noErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _noErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
