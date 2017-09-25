import React from 'react';
import ReactDOM from 'react-dom';
import TrackIndexItem from '../tracks/track_index_item';
import AppModal from '../../misc_tools/modal';

class UserPageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: props.tracks,
      active: props.tracks[0],
      play: false
    };
    console.log(props);
  }

  componentDidMount() {
    let pageUser = this.props.match.params.username;
    this.props.getAllUserTracks(pageUser);
    this.props.getUser(pageUser);
  }

  componentWillUpdate(nextProps) {
    if(nextProps.match.params.username!==this.props.match.params.username) {
      let pageUser = nextProps.match.params.username;
      this.props.getUser(pageUser);
      this.props.getAllUserTracks(pageUser);
    }
  }

  renderUserHeader() {
    if (this.props.users.length === 1) {
      let user = this.props.users[0];
      return (
        <div className="user-header-bg">
          <div className="user-avatar-container">
            <img className="user-avatar" src={user.avatar_url}/>
          </div>
          <div className="user-header-username-container">
            <div className="user-header-username">{user.username}</div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  onIndexItemChanged(newState) {
    console.log(newState);
    this.setState({ track: newState.track, play: newState.play });
    this.props.callbackApp({
      tracks: this.props.tracks,
      track: newState.track,
      play: newState.play
    });
  }

  render () {
    return (
      <div className="user-page">
        { this.renderUserHeader() }
        <div className="user-tracklist">
          <h1>Tracks by {this.props.match.params.username}</h1>
          <ul>
            {
              this.props.tracks.map((track, idx) => {
                return <TrackIndexItem key={idx}
                                       track={track}
                                       play={this.state.play}
                                       callbackIndex={(newState) => this.onIndexItemChanged(newState)}
                       />;
              })
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default UserPageMain;
