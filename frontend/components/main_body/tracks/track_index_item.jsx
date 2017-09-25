import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import ReactMusicPlayer from '../../misc_tools/react_music_player';
import MusicPlayer from '../../play_bar/music_player';
import { getTrack} from '../../../actions/track_actions';

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      play: this.props.play
    };
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
    const newState = !this.state.play;
    this.setState({ play: newState });
    this.props.callbackIndex({
      track: this.props.track,
      play: newState
    });
  }

  render() {
    if(this.state.track) {
      if (this.state.track.title.length > 0) {
        return (
          <div>
            <div className="track-index-container">
              <div>
                <div>
                  <img className="track-cover-art" src={this.state.track.cover_art_url}/>
                </div>
              </div>
              <div className="track-index-data">
                <Link to={`/${this.state.track.creator}/`}>{this.state.track.creator}</Link>
                <Link to={`/tracks/${this.state.track.id}`}>{this.state.track.title}</Link>
                <button onClick={()=>this.togglePlay()}>Click Me</button>
                <a>{this.state.track.description}</a>
              </div>
              <div>{ this.renderElapsedTime()}{' ago'}</div>
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
