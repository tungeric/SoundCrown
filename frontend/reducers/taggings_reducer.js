import {
  RECEIVE_TAGGINGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from '../actions/tagging_actions';
import merge from 'lodash/merge';

const TaggingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGGINGS:
      return action.taggings;
    case RECEIVE_TAGGING:
      const newState = merge({}, state);
      newState[action.tagging.id] = action.tagging;
      return newState;
    case REMOVE_TAGGING:
      const cleanState = merge({}, state);
      delete cleanState[action.tagging.id];
      return cleanState;
    default:
      return state;
  }
};

export default TaggingsReducer;
