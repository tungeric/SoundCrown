import React from 'react';
import ReactDOM from 'react-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <div>
        <div className="test">
          <h1>Connect on SoundCrown</h1>
          <p className="splash-hook">Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</p>
        </div>
      </div>
    );
  }

}

export default SplashPage;
