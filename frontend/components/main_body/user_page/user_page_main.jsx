import React from 'react';
import ReactDOM from 'react-dom';
import TrackIndexItem from '../tracks/track_index_item';
import AppModal from '../../misc_tools/modal';

class UserPageMain extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let pageUser = this.props.match.params.username;
    this.props.getAllUserTracks(pageUser);
  }

  componentWillUpdate(nextProps) {
    if(nextProps.match.params.username!==this.props.match.params.username) {
      let pageUser = nextProps.match.params.username;
      this.props.getAllUserTracks(pageUser);
    }
  }

  render () {
    return (
      <div>
        <div className="user-tracklist">
          <h1>Tracks by {this.props.match.params.username}</h1>
          <ul>
            {
              this.props.tracks.map((track, idx) => <TrackIndexItem key={idx} track={track}/>)
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default UserPageMain;
