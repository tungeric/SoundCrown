import { RECEIVE_COMMENTS,
         RECEIVE_COMMENT,
         REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newState = merge({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      const cleanState= merge({}, state);
      delete cleanState[action.comment.id];
      return cleanState;
    default:
      return state;
  }
};

export default CommentsReducer;
