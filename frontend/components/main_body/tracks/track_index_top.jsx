import React from 'react';
import ReactDOM from 'react-dom';
import NavBarContainer from '../../nav_bar/nav_bar_container';
import TrackIndexItem from '../tracks/track_index_item';

class TrackIndexTop extends React.Component {
  constructor(props) {
    super(props);
    this.goToNew = this.goToNew.bind(this);
  }

  componentDidMount() {
    this.props.getAllTopTracks();
  }

  onIndexItemChanged(newState) {
    this.setState({ track: newState.track, play: newState.play });
    this.props.callbackApp({
      tracks: Object.values(this.props.tracks),
      track: newState.track,
      play: newState.play
    });
  }

  goToNew() {
    this.props.history.push('/stream/new');
  }

  render () {
    if (this.props.tracks) {
      const tracks = Object.values(this.props.tracks);
      return (
        <div>
          <nav className="stream-nav">
            <a className = "inactive-tab" onClick={this.goToNew}>New</a>
            <a className = "active-tab">Top</a>
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

export default TrackIndexTop;
