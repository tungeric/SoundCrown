import { merge } from 'lodash';
import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  RECEIVE_TAG_ERRORS
} from '../actions/tag_actions';

const _noErrors = [];

const TagsErrorsReducer = (state = _noErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAG_ERRORS:
      return action.errors;
    case RECEIVE_TAG:
      return _noErrors;
    case RECEIVE_TAGS:
      return _noErrors;
    default:
      return state;
  }
};

export default TagsErrorsReducer;
