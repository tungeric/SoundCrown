import React from 'react';
import ReactDOM from 'react-dom';
import NavBarContainer from '../../nav_bar/nav_bar_container';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <nav>
          <NavBarContainer />
        </nav>
        <div className="stream">
          <h1>Streaming</h1>
        </div>
      </div>
    );
  }

}

export default StreamPage;
