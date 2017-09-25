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
  }

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

  render() {
    console.log(this.state);
    const { active, play, progress } = this.state;
    if(this.state.active) {
      if(this.state.songs.length > 0) {
        let coverClass = classnames('player-cover', {'no-height': Boolean(!active.cover) });
        let playPauseClass = classnames('fa', {'fa-pause': play}, {'fa-play': !play});
        let volumeClass = classnames('fa', {'fa-volume-up': !this.state.mute}, {'fa-volume-off': this.state.mute});
        let repeatClass = classnames('player-btn small repeat', {'active': this.state.repeat});
        let randomClass = classnames('player-btn small random', {'active': this.state.random });
        // console.log(this.state);
        return(
          <div className="player-container">
            <audio id="music" src={active.url} autoPlay={this.state.play}
                   preload="auto" ref="player">
            </audio>

            <div className="artist-info">
                <h2 className="artist-name">{active.artist.name}</h2>
                <h3 className="artist-song-name">{active.artist.song}</h3>
            </div>

            <div className="player-progress-container" onClick={this.setProgress}>
                <span className="player-progress-value" style={{width: progress + '%'}}></span>
            </div>


            <div className="player-options">
                <div className="player-buttons player-controls">
                    <button onClick={this.toggle} className="player-btn big" title="Play/Pause">
                        <i className={playPauseClass} />
                    </button>

                    <button onClick={this.previous} className="player-btn medium" title="Previous Song">
                        <i className="fa fa-backward" />
                    </button>

                    <button onClick={this.next} className="player-btn medium" title="Next Song">
                        <i className="fa fa-forward" />
                    </button>
                </div>

                <div className="player-buttons">
                    <button className="player-btn small volume" onClick={this.toggleMute} title="Mute/Unmute">
                        <i className={volumeClass} />
                    </button>

                    <button className={repeatClass} onClick={this.repeat} title="Repeat">
                        <i className="fa fa-repeat" />
                    </button>

                    <button className={randomClass} onClick={this.randomize} title="Shuffle">
                        <i className="fa fa-random" />
                    </button>
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
