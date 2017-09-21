import { RECEIVE_ALL_TRACKS,
         RECEIVE_TRACK,
         REMOVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const TracksReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      newState[action.track.id] = action.track;
      return newState;
    case REMOVE_TRACK:
      delete newState[action.track.id];
      return newState;
    default:
      return oldState;
  }
};

export default TracksReducer;
