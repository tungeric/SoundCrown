import { connect } from 'react-redux';
import TrackPageMain from './track_page_main';
import { getTrack} from '../../../actions/track_actions';

const mapStateToProps = (state, props) => ({
  track: state.tracks[props.match.params.trackId]
});

const mapDispatchToProps = (dispatch, props) => ({
  getTrack: (id) => dispatch(getTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPageMain);
