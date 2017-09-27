import { RECEIVE_TRACKS,
         RECEIVE_TRACK,
         REMOVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const TracksReducer = (oldState={}, action) => {
  console.log(action);
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      const newTrack = action.track || null;
      const newState = merge({}, oldState);
      if (newTrack) {
        newState[newTrack.id] = newTrack;
      }
      return newState;
    case REMOVE_TRACK:
      const cleanState = merge({}, oldState);
      delete cleanState[action.track.id];
      return cleanState;
    default:
      return oldState;
  }
};

export default TracksReducer;
