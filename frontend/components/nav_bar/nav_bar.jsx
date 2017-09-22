import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import AppModal from '../misc_tools/modal';
import LoadingBar from 'react-redux-loading-bar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false
    };
  }

  renderSessionButtons() {
    const currentUser = this.props.currentUser;
    const demoUser = {username:"demo", password: "password"};
    if (currentUser) {
      const capitalUser = currentUser.username.charAt(0).toUpperCase() + currentUser.username.slice(1);
      return (
        <div className="nav-right">
          <Link className="nav-user-container" to={`/${currentUser.username}`}>
            <img className="nav-user-avatar" src={currentUser.avatar_url}/>
            <div className="nav-user">{capitalUser}</div>
          </Link>
          <AppModal formType="upload" className="nav-upload-track-btn" text="Upload Track"/>
          <button className="nav-btn" onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <button className="splash-nav-btn-login" onClick={()=> {this.props.login(demoUser);}}>Demo</button>
          <AppModal formType="login" className="nav-btn-login" text="Sign in"/>
          <AppModal formType="signup" className="nav-btn-signup" text="Create account"/>
        </div>
      );
    }
  }

  render() {
    if(this.props.location.pathname === "/") {
      return <div></div>;
    } else {
      return (
        <header className='nav-header'>
          <LoadingBar />
          <nav className="nav-bar">
            <div className="nav-left">
              <Link className="nav-logo" to="/stream"></Link>
              <Link className="nav-btn" to="/stream">Home</Link>
            </div>
            <div className="nav-buttons">
              { this.renderSessionButtons() }
            </div>
          </nav>
        </header>
      );
    }
  }
}

export default NavBar;
