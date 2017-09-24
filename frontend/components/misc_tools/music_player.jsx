import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import shuffle from 'shuffle-array';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: this.props.songs[0],
        current: 0,
        progress: 0,
        random: false,
        repeat: false,
        mute: false,
        play: this.props.autoplay || false,
        songs: this.props.songs
    };
  }

  startPlayback() {
    return (
      document.getElementById('music').play()
        .then( response => console.log("it worked!"),
                errors => console.log(errors))
    );
  }

  render() {
    const { active, play, progress } = this.state;
    return(
      <div className="player-container">
        <audio id="music" src={active.url} autoPlay={this.state.play}
               preload="auto" ref="player">
        </audio>
        <button onClick={this.startPlayback}>Click Me</button>
      </div>
    );
  }
}

export default MusicPlayer;
