import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.track;
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

  render() {
    if(this.state) {
      if (this.state.title.length > 0) {
        return (
          <div>
            <div className="track-index-container">
              <div>
                <div>
                  <img className="track-cover-art" src={this.state.cover_art_url}/>
                </div>
              </div>
              <div className="track-index-data">
                <Link to={`/${this.state.creator}/`}>{this.state.creator}</Link>
                <Link to={`/tracks/${this.state.id}`}>{this.state.title}</Link>
                <a>{this.state.description}</a>
              </div>
              <div>{ this.renderElapsedTime()}{' ago'}</div>
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

export default TrackIndexItem;
