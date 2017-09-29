import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state, props) => {
  return {
    tracks: props.trackData.tracks,
    active: props.trackData.active,
    play: props.trackData.play
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    updateTrack: (track) => dispatch(updateTrack(track))
  };
};

export default (connect(mapStateToProps, mapDispatchToProps)(MusicPlayer));
