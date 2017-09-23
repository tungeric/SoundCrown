import React from 'react';
import ReactDOM from 'react-dom';


class TrackPageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
  }

  componentWillMount() {
    this.props.getTrack(this.props.match.params.trackId)
      .then( response => this.setState(response.track));
  }

  render () {
    if(this.state) {
      if (this.state.title.length > 0) {
        let fixedUrl = this.state.cover_art_url.slice(0,9)
                      +"-us-west-1"
                      +this.state.cover_art_url.slice(9);
        return (
          <div>
            <div className="track-header">
              <img className="track-cover-art" src={fixedUrl}/>
              <h1>{this.state.title}</h1>
              <a>{this.state.description}</a>
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
