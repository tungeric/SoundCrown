import React from 'react';
import ReactDOM from 'react-dom';
import NavBarContainer from '../../nav_bar/nav_bar_container';
import TrackIndexItem from '../tracks/track_index_item';

class TrackIndexNew extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tracks: this.props.tracks,
      ready: false
    };
    this.goToTop = this.goToTop.bind(this);
  }

  componentDidMount() {
    this.props.getAllNewTracks();
    this.setState({ready: true});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tracks !== this.state.tracks) {
      this.setState({ tracks: nextProps.tracks});
    }
  }

  componentWillUnmount() {
    this.setState({
      tracks: null,
      ready: false
    });
  }

  onIndexItemChanged(newState) {
    this.setState({ track: newState.track, play: newState.play });
    this.props.callbackApp({
      tracks: Object.values(this.props.tracks).reverse(),
      track: newState.track,
      play: newState.play
    });
  }
  goToTop() {
    this.props.history.push('/stream/top');
  }

  render () {
    if (this.state.tracks && this.state.ready === true) {
      const tracks = Object.values(this.state.tracks).reverse();
      return (
        <div>
          <nav className="stream-nav">
            <a className = "active-tab" >New</a>
            <a className = "inactive-tab" onClick={this.goToTop}>Top</a>
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
    } else {
      return <div></div>;
    }
  }

}

export default TrackIndexNew;
