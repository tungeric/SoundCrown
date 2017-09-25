import { connect } from 'react-redux';
import MusicPlayer from './music_player';

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    tracks: props.trackData.tracks,
    active: props.trackData.active,
    play: props.trackData.play
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return{
//   };
// };

export default (connect(mapStateToProps)(MusicPlayer));
