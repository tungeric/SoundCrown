import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import MusicPlayer from '../../play_bar/music_player';
import TrackMenuContainer from '../../misc_tools/track_menu_container';

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      play: false,
    };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentWillReceiveProps(nextProps){

    // this.setState({track: nextProps.track});
    if (nextProps.active &&
        this.props.track.audio_url === nextProps.active.url &&
        this.state.play !== nextProps.play){
      this.setState({ play: nextProps.play});
    }

    if (nextProps.active &&
        this.props.track.audio_url !== nextProps.active.url &&
        this.state.play === nextProps.play){
      this.setState({ play: false});
    }
  }

  renderElapsedTime() {
    let seconds = Math.floor((new Date() - this.props.track.created_at) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
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

  renderTrackMenu() {
    if(this.props.currentUser) {
      if (this.props.currentUser.username === this.props.track.creator) {
        return <TrackMenuContainer key={this.props.id}
                                   track={this.props.track}
                                   history={this.props.history}/>;
      } else {
        return <div></div>;
      }
    } else {
      return <div></div>;
    }
  }
  
  renderTags() {
    const tags = Object.values(this.props.track.tags).map((tagObject) => tagObject.name);
    // console.log(tags);
    return(
      <div className="tag-container">
        { tags.map((name) => {
          return(
            <Link to={`/search?q=${name}`} className="tag">#{name}</Link>
          );
        })
       }
      </div>
    );
  }

  render() {
    console.log("CURRENT TRACK: ",this.state.track)
    const play = this.state.play && (this.state.track.id === this.props.track.id);
    if(this.props.track) {
      if (this.props.track.title.length > 0) {
        let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play': !play});
        let animationPlayPauseClass = classnames({'now playing': play}, {'paused' : !play });
        return (
          <div className="track-index-container">
            <div className="track-cover-container">
              <Link to={`/tracks/${this.props.track.id}`}>
                <div className="track-cover-art" style={{backgroundImage: 'url(' + this.props.track.cover_art_url+ ')'}}></div>
              </Link>
            </div>
            <div className="track-data-container">
              <div className="track-play-and-data">
                <div className="track-data-left">
                  <button onClick={this.togglePlay} className="player-btn big" title="Play/Pause">
                    <i className={playPauseClass} />
                  </button>
                  <div className="track-index-data">
                    <Link className="track-creator-name" to={`/${this.props.track.creator}/`}>{this.props.track.creator}</Link>
                    <br/>
                    <Link className="track-title" to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link>
                  </div>
                </div>
                <div className="track-data-right">
                  <div>{ this.renderElapsedTime()}{' ago'}</div>
                  <div>{ this.renderTags()}</div>
                </div>
              </div>
              <br/>
              <br/>
                <div className="track-progress-container">
                  <div className={animationPlayPauseClass} id={`music-animation-${this.props.track.id}`}>
                    <span className="bar n1"></span>
                    <span className="bar n2"></span>
                    <span className="bar n3"></span>
                    <span className="bar n4"></span>
                    <span className="bar n5"></span>
                    <span className="bar n6"></span>
                    <span className="bar n7"></span>
                    <span className="bar n8"></span>
                    <span className="bar n3"></span>
                    <span className="bar n2"></span>
                    <span className="bar n8"></span>
                    <span className="bar n5"></span>
                    <span className="bar n3"></span>
                    <span className="bar n7"></span>
                    <span className="bar n2"></span>
                    <span className="bar n4"></span>
                    <span className="bar n1"></span>
                    <span className="bar n7"></span>
                    <span className="bar n6"></span>
                    <span className="bar n3"></span>
                    <span className="bar n4"></span>
                    <span className="bar n2"></span>
                    <span className="bar n7"></span>
                    <span className="bar n4"></span>
                    <span className="bar n1"></span>
                    <span className="bar n5"></span>
                    <span className="bar n3"></span>
                    <span className="bar n6"></span>
                    <span className="bar n2"></span>
                    <span className="bar n3"></span>
                    <span className="bar n7"></span>
                    <span className="bar n4"></span>
                    <span className="bar n1"></span>
                    <span className="bar n6"></span>
                    <span className="bar n3"></span>
                    <span className="bar n6"></span>
                    <span className="bar n2"></span>
                    <span className="bar n5"></span>
                    <span className="bar n1"></span>
                    <span className="bar n7"></span>
                    <span className="bar n4"></span>
                    <span className="bar n6"></span>
                    <span className="bar n3"></span>
                    <span className="bar n2"></span>
                    <span className="bar n6"></span>
                    <span className="bar n8"></span>
                    <span className="bar n7"></span>
                    <span className="bar n6"></span>
                    <span className="bar n5"></span>
                    <span className="bar n4"></span>
                    <span className="bar n3"></span>
                    <span className="bar n2"></span>
                    <span className="bar n1"></span>
                    <span className="bar n4"></span>
                  </div>
                  <br/>
                  <div className="track-item-info">
                    <div className="track-options-bar">
                      {this.renderTrackMenu()}
                    </div>
                    <div className="num-plays"><i className="fa fa-play" /> {this.props.track.plays} </div>
                  </div>
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
