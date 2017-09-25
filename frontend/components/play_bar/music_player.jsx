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
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      active: nextProps.active,
      play: nextProps.play,
      songs: nextProps.tracks
    });
  }

  togglePlayback() {
    return (
      document.getElementById('music').play()
        .then( response => console.log("it worked!"),
                errors => console.log(errors))
    );
  }

  render() {
    console.log(this.state);
    if(this.state.active) {
      if(this.state.active.length === 1) {
        let coverClass = classnames('player-cover', {'no-height': Boolean(!active.cover) });
        let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play': !play});
        let volumeClass = classnames('fa', {'fa-volume-up': !this.state.mute}, {'fa-volume-off': this.state.mute});
        let repeatClass = classnames('player-btn small repeat', {'active': this.state.repeat});
        let randomClass = classnames('player-btn small random', {'active': this.state.random });
        // console.log(this.state);
        const { active, play, progress } = this.state;
        return(
          <div className="player-container">
            <audio id="music" src={active.url} autoPlay={this.state.play}
                   preload="auto" ref="player">
            </audio>
            <button onClick={this.togglePlayback}>Click Me</button>
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
