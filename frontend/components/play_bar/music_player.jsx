// THIS CODE IS MODIFIED FROM REACTMUSICPLAYER BY SMRONJU
// https://github.com/smronju/React-Music-Player

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import shuffle from 'shuffle-array';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: this.props.active || null,
        current: 0,
        progress: 0,
        random: false,
        repeat: false,
        mute: false,
        play: this.props.play || false,
        tracks: this.props.tracks || [],
        playCounted: false
    };
    this.toggle = this.toggle.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.toggleRandomize = this.toggleRandomize.bind(this);
    this.repeat = this.repeat.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active,
      play: nextProps.play,
      tracks: nextProps.tracks,
      playCounted: false
    });
    if(this.refs.player) {
      if(nextProps.play) {
        this.refs.player.play();
      } else {
        this.refs.player.pause();
      }
    }
  }

  componentDidUpdate(prevState) {
    if(this.state.active !== prevState.active ||
      this.state.play !== prevState.play ||
      this.state.tracks !== prevState.tracks ) {
        this.props.callbackApp({
          active: this.state.active,
          play: this.state.play,
          tracks: this.state.tracks
        });
    }
  }

  toggle () {
    this.state.play ? this.pause() : this.play();
  }

  play () {
      this.setState({ play: true });
      this.refs.player.play();
  }

  pause () {
      this.setState({ play: false });
      this.refs.player.pause();
  }

  next () {
      let total = this.state.tracks.length;
      let current = (this.state.repeat) ? this.state.current : (this.state.current < total - 1) ? this.state.current + 1 : 0;
      let active = this.state.tracks[current];

      this.setState({ current: current, active: active, progress: 0, playCounted: false });

      this.refs.player.src = active.url;
      this.play();
  }

  previous () {
      let total = this.state.tracks.length;
      let current = (this.state.current > 0) ? this.state.current - 1 : total - 1;
      let active = this.state.tracks[current];

      this.setState({ current: current, active: active, progress: 0, playCounted: false });

      this.refs.player.src = active.url;
      this.play();
  }

  toggleRandomize () {
    if (this.state.random) {
      this.setState({tracks: this.props.tracks, random: !this.state.random });
    } else {
      let shuffledSongs = shuffle(this.state.tracks.slice());
      this.setState({
        tracks: (!this.state.random) ? shuffledSongs : this.state.tracks,
        random: !this.state.random
      });
    }
  }

  repeat () {
      this.setState({ repeat: !this.state.repeat });
  }

  toggleMute () {
      let mute = this.state.mute;

      this.setState({ mute: !this.state.mute });
      this.refs.player.volume = (mute) ? 1 : 0;
  }

  secondsToHMS (seconds) {
    let sec = Number(seconds);
    let h = Math.floor(sec / 3600);
    let m = ("0" + Math.floor(sec % 3600 / 60)).slice(-2);
    let s = ("0" + Math.floor(sec % 3600 % 60)).slice(-2);
    let display = h === 0 ? `${m}:${s}` : `${h}:${m}:${s}`;
    return display;
  }

  currentTrackDuration() {
    if(this.refs.player) {
      let duration = this.refs.player.duration;
      return this.secondsToHMS(duration);
    } else {
      return "0:00";
    }
  }

  currentTrackTime() {
    if(this.refs.player) {
      let duration = this.refs.player.currentTime;
      return this.secondsToHMS(duration);
    } else {
      return "0:00";
    }
  }

  setProgress (e) {
    let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
    let width = target.clientWidth;
    let rect = target.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let duration = this.refs.player.duration;
    let currentTime = (duration * offsetX) / width;
    let progress = (currentTime * 100) / duration;

    this.refs.player.currentTime = currentTime;
    this.setState({ progress: progress });
    this.play();
  }

  updateProgress () {
    let duration = this.refs.player.duration;
    let currentTime = this.refs.player.currentTime;
    let progress = (currentTime * 100) / duration;

    if(duration > 0) {
      let start= this.refs.player.played.start(0);
      let end = this.refs.player.played.end(0);
      if (this.state.playCounted === false && (end - start > 3 || end - start > 0.5* duration) ) {
        this.props.updateTrack({
          track: {
            id: this.props.trackData.track.id,
            plays: this.props.trackData.track.plays+1
          }
        });
        this.setState({playCounted: true});
      }
    }

    this.setState({ progress: progress });
  }

  render() {

    const active = this.state.active;
    const play = this.state.play;
    const progress = this.state.progress;
    if(this.state.active) {
      if(this.state.tracks.length > 0) {
        let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play': !play});
        let volumeClass = classnames('fa', {'fa-volume-up': !this.state.mute}, {'fa-volume-off': this.state.mute});
        let repeatClass = classnames('player-btn small repeat', {'active': this.state.repeat});
        let randomClass = classnames('player-btn small random', {'active': this.state.random });
        return(
          <div className="play-bar">
            <div className="player-container">
              <audio id="music"
                     src={active.url}
                     autoPlay={this.state.play}
                     preload="auto"
                     ref="player"
                     onTimeUpdate={this.updateProgress}
                     onEnded={this.next}
                     onError={this.next}>
              </audio>

                <div className="player-buttons">
                    <button onClick={this.previous} className="player-btn small" title="Previous Song">
                      <i className="fa fa-step-backward" />
                    </button>

                    <button onClick={this.toggle} className="player-btn small" title="Play/Pause">
                      <i className={playPauseClass} />
                    </button>

                    <button onClick={this.next} className="player-btn small" title="Next Song">
                      <i className="fa fa-step-forward" />
                    </button>

                    <button className={repeatClass} onClick={this.repeat} title="Repeat">
                        <i className="fa fa-repeat" />
                    </button>

                    <button className={randomClass} onClick={this.toggleRandomize} title="Shuffle">
                        <i className="fa fa-random" />
                    </button>
                </div>
                <div className="progress-and-volume">
                  <div className = "track-duration">{this.currentTrackTime()}</div>
                  <div className="player-progress-container" onClick={this.setProgress}>
                      <span className="player-progress-value" style={{width: progress + '%'}}></span>
                  </div>
                  <div className = "track-duration">{this.currentTrackDuration()}</div>
                  <button className="player-btn small volume" onClick={this.toggleMute} title="Mute/Unmute">
                    <i className={volumeClass} />
                  </button>
                </div>


                <div className="track-info">
                  <div className="cover-art-thumbnail" style={{backgroundImage: 'url('+ active.cover +')'}}></div>
                  <div className="artist-info">
                    <h2 className="artist-name">{active.artist.name}</h2>
                    <h3 className="artist-song-name">{active.artist.song}</h3>
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

export default MusicPlayer;
