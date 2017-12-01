import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      const newState = merge({}, state);
      newState[action.tag.id] = action.tag;
      return newState;
    case REMOVE_TAG:
      const cleanState = merge({}, state);
      delete cleanState[action.tag.id];
      return cleanState;
    default:
      return state;
  }
};

export default TagsReducer;
