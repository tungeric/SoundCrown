import React from 'react';
import { connect } from 'react-redux';
import { deleteTrack } from '../../actions/track_actions';
import TrackMenu from './track_menu';

const mapDispatchToProps = dispatch => {
  return {
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    getAllUserTracks: (username) => dispatch(username)
  };
};

export default connect(undefined, mapDispatchToProps)(TrackMenu);
