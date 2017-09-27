import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditTrackForm from './edit_track_form';
import { updateTrack, getTrack } from '../../../actions/track_actions';
import { clearErrors } from '../../../actions/session_actions';

const mapStateToProps = (state, props) => {
  let track = state.tracks[props.match.params.trackId];
  let currentUser = state.session.currentUser;
  let errors = [];
  return { currentUser, track, errors };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateTrack: post => dispatch(updateTrack(post)),
    getTrack: id => dispatch(getTrack(id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditTrackForm));
