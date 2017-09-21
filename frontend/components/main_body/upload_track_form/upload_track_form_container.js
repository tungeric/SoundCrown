import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadTrackForm from './upload_track_form';
import { createTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, props) => {
  // console.log(props);
  let track = {title: "", description: ""};
  return { track };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createTrack: post => dispatch(createTrack(post))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadTrackForm));
