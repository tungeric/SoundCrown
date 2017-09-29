import React from 'react';
import ReactDOM from 'react-dom';
import NavBarContainer from '../../nav_bar/nav_bar_container';
import TrackIndexItem from '../tracks/track_index_item';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNewTracks();
  }

  onIndexItemChanged(newState) {
    this.setState({ track: newState.track, play: newState.play });
    this.props.callbackApp({
      tracks: Object.values(this.props.tracks),
      track: newState.track,
      play: newState.play
    });
  }

  render () {
    console.log(this.props);
    if (this.props.tracks) {
      const tracks = Object.values(this.props.tracks);
      return (
        <div>
          <nav className="stream-nav">
            <a href="#stream/new">New</a>
          </nav>
        </div>
      );
    }
  }

}

export default StreamPage;
