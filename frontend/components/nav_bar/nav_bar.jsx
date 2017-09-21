import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false
    };
  }

  renderSessionButtons() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      const capitalUser = currentUser.username.charAt(0).toUpperCase() + currentUser.username.slice(1);
      return (
        <div className="nav-right">

          <Link className="nav-user-container" to={`/${currentUser.username}`}><img className="nav-user-avatar" src={currentUser.avatar_url}/><div className="nav-user">{capitalUser}</div></Link>
          <button className="nav-btn" onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="nav-btn" to="/signup">Sign Up</Link>
          <Link className="nav-btn" to="/login">Log In</Link>
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
