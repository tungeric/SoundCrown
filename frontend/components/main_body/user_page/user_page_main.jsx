import React from 'react';
import ReactDOM from 'react-dom';
import UserTrackItem from './user_track_item';
import AppModal from '../../misc_tools/modal';

class UserPageMain extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let pageUser = this.props.match.params.username;
    this.props.getAllUserTracks(pageUser);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.username!==this.props.match.params.username) {
      let pageUser = nextProps.match.params.username;
      this.props.getAllUserTracks(pageUser);
    }
  }

  render () {
    return (
      <div>
        <div className="user-tracklist">
          <ul>
            {
              this.props.tracks.map((track, idx) => <UserTrackItem key={idx} track={track}/>)
            }
          </ul>
        </div>
        <AppModal formType="upload" className="upload-track-btn" text="Upload Track"/>
      </div>
    );
  }

}

export default UserPageMain;
