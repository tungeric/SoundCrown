import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import TrackMenuContainer from '../../misc_tools/track_menu_container';
import CommentFormContainer from '../comment_form/comment_form_container';
import CommentIndexContainer from '../comment_index/comment_index_container';

class TrackPageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      play: false
    };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentWillMount() {
    this.props.getTrack(this.props.match.params.trackId)
      .then( response => this.setState(response.track));
  }

  componentWillReceiveProps(nextProps){
    if(this.state.track){
      if((nextProps.track.id === this.state.track.id)) {
        if (this.state.play !== nextProps.trackData.play) {
          this.props.getTrack(nextProps.track.id);
          this.setState({
            play: nextProps.trackData.play
          });
        }
      }
    }
  }

  renderElapsedTime() {
    let seconds = Math.floor((new Date() - this.state.created_at) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 0) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 0) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 0) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 0) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 0) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  togglePlay(e) {
    e.preventDefault();
    const newState = !this.state.play;
    this.setState({ play: newState });
    this.props.callbackApp({
      track: this.props.track,
      play: newState
    });
  }

  renderTrackMenu() {
    if(this.props.currentUser) {
      if (this.props.currentUser.username === this.props.track.creator) {
        return <TrackMenuContainer key={this.state.id}
                                   track={this.state.track}
                                   history={this.props.history}/>;
      } else {
        return <div></div>;
      }
    } else {
      return <div></div>;
    }
  }

  render () {
    const active = this.state.track;
    const play = this.state.play;
    if(this.state.title) {
      if (this.state.title.length > 0) {
        let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play': !play});
        let animationPlayPauseClass = classnames({'now playing': play}, {'paused' : !play });
        return (
          <div className="track-page">
            <div className="track-header-bg">
              <div className="track-header-left">
                <div className="track-header-data">
                  <button onClick={this.togglePlay} className="player-btn big" title="Play/Pause">
                    <i className={playPauseClass} />
                  </button>
                  <div>
                    <Link className="track-header-username" to={`/${this.state.creator}/`}>{this.state.creator}</Link>
                    <div className="track-header-trackname">{this.state.title}</div>
                    <div className="more-options">
                      {this.renderTrackMenu()}
                    </div>

                  </div>
                  <div className="track-header-time">{ this.renderElapsedTime()}{' ago'}</div>
                </div>
                <br/><br/><br/><br/><br/>
                <div className="track-playbar-and-options">
                  <div className="track-header-progress-container">
                    <div className={animationPlayPauseClass} id={`music-animation-${this.state.id}`}>
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
                    <div className="num-plays"><i className="fa fa-play"/> {this.state.plays} </div>
                  </div>
                </div>
              </div>
              <div className="track-header-right">
                <div className="track-cover-art-container">
                  <img className="track-cover-art" src={this.state.cover_art_url}/>
                </div>
              </div>
            </div>
            <CommentIndexContainer/>
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


export default TrackPageMain;
