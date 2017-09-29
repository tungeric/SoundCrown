import React from 'react';
import ReactDOM from 'react-dom';
import NavBarContainer from '../../nav_bar/nav_bar_container';
import TrackIndexItem from '../tracks/track_index_item';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.location='/#/stream/new';
  }

  render () {
    return <div></div>;
  }
}

export default StreamPage;
