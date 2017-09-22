import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadTrackForm from './upload_track_form';
import { createTrack } from '../../../actions/track_actions';

const mapStateToProps = ({session, errors}, props) => {
  let track = {title: "", description: ""};
  let currentUser = session.currentUser;
  return { currentUser, track, errors };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createTrack: post => dispatch(createTrack(post))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadTrackForm));