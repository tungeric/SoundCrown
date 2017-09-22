import React from 'react';
import ReactDOM from 'react-dom';


class TrackPageMain extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.getTrack(this.props.match.params.trackId);
  }

  render () {
    return (
      <div>
        <div>
          <h1>{this.props.track.title}</h1>
          <a>{this.props.track.description}</a>
        </div>
      </div>
    );
  }

}

export default TrackPageMain;
