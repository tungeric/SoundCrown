import { connect } from 'react-redux';
import TrackPageMain from './track_page_main';
import { withRouter } from 'react-router-dom';
import { getTrack} from '../../../actions/track_actions';

const mapStateToProps = (state, props) => {
  let track={title: "", description: ""};
  if (state) {
    return {
      track: state.tracks[props.match.params.trackId]
    };
  } else {
    return {
      track: track
    };
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  getTrack: (id) => dispatch(getTrack(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackPageMain));
