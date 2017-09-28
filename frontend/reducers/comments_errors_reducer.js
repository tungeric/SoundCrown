import { merge } from 'lodash';
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../actions/comment_actions';

const _noErrors = [];

const TracksErrorsReducer = (state = _noErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
      return _noErrors;
    case RECEIVE_COMMENTS:
      return _noErrors;
    default:
      return state;
  }
};

export default CommentsErrorsReducer;
