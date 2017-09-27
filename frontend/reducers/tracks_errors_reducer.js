import { merge } from 'lodash';
import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  RECEIVE_TRACK_ERRORS
} from '../actions/track_actions';

const _noErrors = [];

const TracksErrorsReducer = (state = _noErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.errors || ["Unable to upload file! Check that you uploaded an audio file."];
    case RECEIVE_TRACK:
      return _noErrors;
    case RECEIVE_TRACKS:
      return _noErrors;
    default:
      return state;
  }
};

export default TracksErrorsReducer;
