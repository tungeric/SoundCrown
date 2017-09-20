import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="splash-header">
        <div className="splash-nav">
          <div className="splash-nav-left">
            <div className="splash-nav-logo"></div>
            <div className="splash-nav-word-logo">S O U N D C R O W N</div>
          </div>
          <div className="splash-nav-right">
            <Link className="splash-nav-btn-login" to="/login">Sign in</Link>
            <Link className="splash-nav-btn-signup" to="/signup">Create account</Link>
          </div>
        </div>
          <h1 className="splash-title">Connect on SoundCrown</h1>
          <div className="splash-hook">
            <br/><br/><br/><br/>
            <Link className="splash-main-btn" to="/signup">Sign up for free</Link>
            <br/><br/>
            <p>Discover, stream, and share a constantly expanding mix of music
            from emerging and major artists around the world.</p>
          </div>
      </div>
    );
  }

}

export default SplashPage;
