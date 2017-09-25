import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import shuffle from 'shuffle-array';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
        active: this.props.trackData.tracks,
        current: 0,
        progress: 0,
        random: false,
        repeat: false,
        mute: false,
        play: this.props.autoplay || false,
        songs: this.props.trackData.track
    };
  }

  togglePlayback() {
    return (
      document.getElementById('music').play()
        .then( response => console.log("it worked!"),
                errors => console.log(errors))
    );
  }

  render() {
    console.log(this.props);
    const { active, play, progress } = this.state;
    return(
      <div className="player-container">
        <audio id="music" src={active.url} autoPlay={this.state.play}
               preload="auto" ref="player">
        </audio>
        <button onClick={this.togglePlayback}>Click Me</button>
      </div>
    );
  }
}

export default MusicPlayer;
