import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

export const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const removeTrack = (track) => ({
  type: REMOVE_TRACK,
  track
});

export const receiveTrackErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const getAllUserTracks = (username) => dispatch => {
  let test = TrackApiUtil.getUserTracks(username);
  return TrackApiUtil.getUserTracks(username)
      .then( response => dispatch(receiveAllTracks(response)),
             errors => dispatch(receiveTrackErrors(errors.responseJSON)));
};

export const getTrack = (id) => dispatch => {
  return TrackApiUtil.getTrack(id)
    .then( response => dispatch(receiveTrack(response)),
           errors => dispatch(receiveTrackErrors(errors.responseJSON)));
};

export const createTrack = (track) => dispatch => {
  return TrackApiUtil.createTrack(track)
    .then(response => {
      dispatch(receiveTrack(response));
      location.hash=`/tracks/${response.id}`;

    },
      errors => dispatch(receiveTrackErrors(errors.responseJSON))
    );
  };

export const deleteTrack = (id) => dispatch => (
  TrackApiUtil.deleteTrack(id)
    .then( response => dispatch(removeTrack(response)),
           errors => dispatch(receiveTrackErrors(errors.responseJSON)))
);
