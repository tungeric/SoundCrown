import React from 'react';
import ReactDOM from 'react-dom';
import NavBarContainer from '../../nav_bar/nav_bar_container';
import TrackIndexItem from '../tracks/track_index_item';

class TrackIndexNew extends React.Component {
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
            <a className = "active-tab" href="#stream/new">New</a>
            <a className = "inactive-tab" href="#stream/Top">Top</a>
          </nav>
          <div className="stream">
            <ul className="user-tracklist">
              {
                tracks.map((track, idx) => {
                  return <TrackIndexItem key={idx}
                                         track={track}
                                         play={this.props.trackData.play}
                                         active={this.props.trackData.active}
                                         currentUser={this.props.currentUser}
                                         history={this.props.history}
                                         callbackIndex={(newState) => this.onIndexItemChanged(newState)}
                                         />;
                })
              }
            </ul>
          </div>
        </div>
      );
    }
  }

}

export default TrackIndexNew;
