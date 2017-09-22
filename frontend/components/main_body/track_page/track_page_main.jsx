import React from 'react';
import ReactDOM from 'react-dom';


class TrackPageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
  }

  componentDidMount() {
    this.props.getTrack(this.props.match.params.trackId)
      .then( response => this.setState(response.track));
  }

  render () {
    console.log(this.statecover_art_url);
    if (this.state.title.length > 0) {
      return (
        <div>
          <div>
            <img src={this.state.cover_art_url}/>
            <h1>{this.state.title}</h1>
            <a>{this.state.description}</a>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}


export default TrackPageMain;
