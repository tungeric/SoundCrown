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
        songs: this.props.tracks || []
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
  }

  // componentDidMount () {
  //     let playerElement = this.refs.player;
  //     if (playerElement) {
  //       playerElement.addEventListener('timeupdate', this.updateProgress);
  //       playerElement.addEventListener('ended', this.end);
  //       playerElement.addEventListener('error', this.next);
  //     }
  // }
  //
  // componentWillUnmount () {
  //     let playerElement = this.refs.player;
  //     if (playerElement) {
  //       playerElement.removeEventListener('timeupdate', this.updateProgress);
  //       playerElement.removeEventListener('ended', this.end);
  //       playerElement.removeEventListener('error', this.next);
  //     }
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active,
      play: nextProps.play,
      songs: nextProps.tracks
    });
  }

  toggle () {
    console.log(this.state);
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
    console.log(this.state.current);
      let total = this.state.songs.length;
      let current = (this.state.repeat) ? this.state.current : (this.state.current < total - 1) ? this.state.current + 1 : 0;
      let active = this.state.songs[current];

      this.setState({ current: current, active: active, progress: 0 });

      this.refs.player.src = active.url;
      this.play();
  }

  previous () {
      let total = this.state.songs.length;
      let current = (this.state.current > 0) ? this.state.current - 1 : total - 1;
      let active = this.state.songs[current];

      this.setState({ current: current, active: active, progress: 0 });

      this.refs.player.src = active.url;
      this.play();
  }

  toggleRandomize () {
    console.log(this.state.random);
    if (this.state.random) {
      this.setState({songs: this.props.tracks, random: !this.state.random });
    } else {
      let shuffledSongs = shuffle(this.state.songs.slice());
      this.setState({
        songs: (!this.state.random) ? shuffledSongs : this.state.songs,
        random: !this.state.random
      });
    }
  }

  repeat () {
      this.setState({ repeat: !this.state.repeat });
  }

  setProgress (e) {
    console.log(e.target);
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

      this.setState({ progress: progress });
  }

  render() {
    // console.log(this.state);
    const active = this.state.active;
    const play = this.state.play;
    const progress = this.state.progress;
    if(this.state.active) {
      if(this.state.songs.length > 0) {
        let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play': !play});
        let volumeClass = classnames('fa', {'fa-volume-up': !this.state.mute}, {'fa-volume-off': this.state.mute});
        let repeatClass = classnames('player-btn small repeat', {'active': this.state.repeat});
        let randomClass = classnames('player-btn small random', {'active': this.state.random });
        // console.log(this.state);
        return(
          <div className="play-bar">
            <div className="player-container">
              <audio id="music" src={active.url} autoPlay={this.state.play}
                     preload="auto" ref="player">
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
                  <div className="player-progress-container" onClick={this.setProgress}>
                      <span className="player-progress-value" style={{width: progress + '%'}}></span>
                  </div>
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
