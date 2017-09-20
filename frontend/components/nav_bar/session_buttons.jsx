import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class SessionButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div>
          Welcome, {currentUser.username}
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default SessionButtons;
