import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import AppModal from '../misc_tools/modal';
import Autosuggest from 'react-autosuggest';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

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
  
  handleChange (event) {
    event.preventDefault();
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push({ pathname: `/search`, search: `?q=${this.refs.searchText.value}`});
    this.refs.searchText.value = '';
  }

  renderSearchBar() {
    return (
      <form className='search-bar' onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <input className='search-text' ref='searchText' id="search-text" type="text" name="search" placeholder="Search"/>
        <span id="search-icon" className="fa fa-search" onClick={this.handleSubmit}></span>
      </form>
    );
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
              { this.renderSearchBar() }
              { this.renderSessionButtons() }
          </nav>
        </header>
      );
    }
  }
}

export default NavBar;
