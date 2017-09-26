import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import MusicPlayer from '../../play_bar/music_player';
import { getTrack} from '../../../actions/track_actions';

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      play: this.props.play
    };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    console.log(this.state);
    if(nextProps.active) {
      if (this.state.track.audio_url === nextProps.active.url &&
          this.state.play !== nextProps.play) {
        this.setState({
          play: nextProps.play
        });
      }
    }
  }

  renderElapsedTime() {
    let seconds = Math.floor((new Date() - this.state.track.created_at) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  togglePlay() {
    console.log(this.props);
    console.log(this.state);
    const newState = !this.state.play;
    this.setState({ play: newState });
    this.props.callbackIndex({
      track: this.props.track,
      play: newState
    });
  }

  render() {
    const active = this.state.track;
    const play = this.state.play;
    if(this.state.track) {
      if (this.state.track.title.length > 0) {
        let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play': !play});
        return (
          <div className="track-index-container">
            <div className="track-cover-container">
              <div className="track-cover-art" style={{backgroundImage: 'url(' + this.state.track.cover_art_url+ ')'}}></div>
            </div>
            <div className="track-data-container">
              <div className="track-play-and-data">
                <div className="track-data-left">
                  <button onClick={this.togglePlay} className="player-btn big" title="Play/Pause">
                    <i className={playPauseClass} />
                  </button>
                  <div className="track-index-data">
                    <Link className="track-creator-name" to={`/${this.state.track.creator}/`}>{this.state.track.creator}</Link>
                    <br/>
                    <Link className="track-title" to={`/tracks/${this.state.track.id}`}>{this.state.track.title}</Link>
                  </div>
                </div>
                <div className="track-data-right">
                  <div>{ this.renderElapsedTime()}{' ago'}</div>
                </div>
              </div>
              <br/>
              <br/>
                <div className="track-progress-container">
                    <span className="track-progress-value" style={{width: '0%'}}></span>
                </div>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    } else {
      return <div></div>;
    }
  }
}

export default TrackIndexItem;
