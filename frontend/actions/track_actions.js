import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
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
  return TrackApiUtil.getUserTracks(username)
      .then( response => dispatch(receiveTracks(response)),
             errors => dispatch(receiveTrackErrors(errors.responseJSON)));
};

export const getAllTracks = () => dispatch => {
  return TrackApiUtil.getAllTracks()
      .then( response => dispatch(receiveTracks(response)),
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
      // FOR SOME REASON ERRORS ARE BEING TREATED AS RESPONSES FOR THIS CASE:
      // HERE'S MY WORKAROUND...
      if(response.constructor === Array) {
        if(response.every((entry) => { return typeof entry === "string"; })) {
          dispatch(receiveTrackErrors(response.responseJSON));
        } else {
        dispatch(receiveTrack(response));
        }
      } else {
        dispatch(receiveTrack(response));
      }
    },
      errors => {
        dispatch(receiveTrackErrors(errors.responseJSON));
    });
};

export const updateTrack = (track) => dispatch => {
  return TrackApiUtil.updateTrack(track)
    .then(response => {
      dispatch(receiveTrack(response));
    },
      errors => dispatch(receiveTrackErrors(errors.responseJSON))
    );
};

export const deleteTrack = (track) => dispatch => (
  TrackApiUtil.deleteTrack(track)
    .then( response => dispatch(removeTrack(response)),
           errors => dispatch(receiveTrackErrors(errors.responseJSON)))
);
