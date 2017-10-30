import React from 'react';
import ReactDOM from 'react-dom';
import TrackIndexItem from '../tracks/track_index_item';
import AppModal from '../../misc_tools/modal';
const queryString = require('query-string');

class SearchResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      active: null,
      play: false,
      user: this.props.user
    };
  }

  componentDidMount() {
    let query = queryString.parse(this.props.location.search);
    console.log(query);
    this.props.getSearchTracks(query.q);
  }

  onIndexItemChanged(newState) {
    this.setState({ track: newState.track, play: newState.play });
    this.props.callbackApp({
      tracks: this.props.tracks,
      track: newState.track,
      play: newState.play
    });
  }

  render() {
    // console.log(this.props.location.search)
    const tracks = Object.values(this.props.tracks);
    console.log(tracks);
    return (
      <div className="search-page">
        <div className="search-tracklist-section">
          <div className="search-track-header">
            <h1 className="search-track-h1">Tracks that match {this.props.match.params.search}</h1>
          </div>
          <ul className="search-tracklist">
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

export default SearchResultsPage;
