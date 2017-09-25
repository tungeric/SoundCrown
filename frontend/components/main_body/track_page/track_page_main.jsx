import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class TrackPageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
  }

  componentWillMount() {
    this.props.getTrack(this.props.match.params.trackId)
      .then( response => this.setState(response.track));
  }

  renderElapsedTime() {
    let seconds = Math.floor((new Date() - this.state.created_at) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }


  render () {
    if(this.state) {
      if (this.state.title.length > 0) {
        return (
            <div className="track-header-bg">
              <div className="track-header-data">
                <Link className="track-header-username" to={`/${this.state.creator}/`}>{this.state.creator}</Link>
                <div className="track-header-trackname">{this.state.title}</div>
                <a>{this.state.description}</a>
              </div>
              <div className="track-header-right">
                <div className="track-header-time">{ this.renderElapsedTime()}{' ago'}</div>
                <div className="track-cover-art-container">
                  <img className="track-cover-art" src={this.state.cover_art_url}/>
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


export default TrackPageMain;
