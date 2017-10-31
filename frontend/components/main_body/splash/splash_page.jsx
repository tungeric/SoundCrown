import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AppModal from '../../misc_tools/modal';
import LoginFormContainer from '../session_form/login_form_container';
import configureStore from '../../../store/store';
import SplashTrackItem from './splash_track_item';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  componentDidMount() {
    this.props.getAllTopTracks();
  }

  onIndexItemChanged(newState) {
    this.setState({ track: newState.track, play: newState.play });
    this.props.callbackApp({
      tracks: Object.values(this.props.tracks),
      track: newState.track,
      play: newState.play
    });
  }

  renderFreeTracks() {
    if (this.props.tracks) {
      const tracks = Object.values(this.props.tracks);
      return (
        <div className="splash-free-tracks">
          <ul className="free-tracklist">
            {
              tracks.map((track,idx) => {
                return <SplashTrackItem key={idx}
                                       track={track}
                                       play={this.props.trackData.play}
                                       active={this.props.trackData.active}
                                       currentUser={this.props.currentUser}
                                       history={this.props.history}
                                       callbackIndex={(newState) => this.onIndexItemChanged(newState)}
                                       />;
              })
            }
          </ul>
        </div>
      );
    }
  }

  handleChangeSearch(event) {
    event.preventDefault();
    this.setState({ search: event.target.value });
  }

  handleSubmitSearch(event) {
    event.preventDefault();
    this.props.history.push({ pathname: `/search`, search: `?q=${this.refs.searchText.value}` });
    this.refs.searchText.value = '';
  }

  renderSearchBar() {
    return (
      <div className="splash-search-container">
        <form className='splash-search-bar' onSubmit={this.handleSubmitSearch} onChange={this.handleChangeSearch}>
          <input className='splash-search-text' ref='searchText' id="search-text" type="text" name="search" placeholder="Search for artists, tracks" />
          <span id="splash-search-icon" className="fa fa-search" onClick={this.handleSubmitSearch}></span>
        </form>
      </div>
    );
  }

  render () {
    const demoUser = {username:"demo", password: "password"};
    return (
      <div className="splash-page">
        <div className="splash-header">
          <div className="splash-nav">
            <div className="splash-nav-left">
              <div className="splash-nav-logo"></div>
              <div className="splash-nav-word-logo">S O U N D C R O W N</div>
            </div>
            <div className="splash-nav-right">
              <button className="splash-nav-btn-login" onClick={()=> {this.props.login(demoUser);}}>Demo</button>
              <span><AppModal formType="login" className="splash-nav-btn-login" text="Sign in"/></span>
              <span><AppModal formType="signup" className="splash-nav-btn-signup" text="Create account"/></span>
            </div>
          </div>
            <h1 className="splash-title">Connect on SoundCrown</h1>
            <div className="splash-hook">
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <AppModal formType="signup" className="splash-main-btn" text="Sign up for free"/>
              <br/>
              <p>Discover, stream, and share a constantly expanding mix of music
              from emerging and major artists around the world.</p>
            </div>
        </div>
        {this.renderSearchBar()}
        <div className="splash-free-section">Hear what's trending for free in the realm</div>
        {this.renderFreeTracks()}
        <div className="splash-connect">
          <a className="splash-connect-text1">Lead the Kingdom</a>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <a className="splash-connect-text2">SoundCrown is available on Github and LinkedIn.</a>
          <br/><br/><br/>
          <a className="splash-connect-icons" href="https://github.com/tungeric/SoundCrown"><i className="fa fa-github"/></a>
          <a className="splash-connect-icons" href="https://www.linkedin.com/in/ericptung/"><i className="fa fa-linkedin-square"/></a>
        </div>

        <div className="splash-join-ad">
          <div className="splash-join-text1">Thanks for listening. Now join the Kingdom.</div>
          <div className="splash-join-text2">Upload tracks, comment, and keep listening. All for free.</div>
          <span><AppModal formType="signup" className="splash-join-btn-signup" text="Create account"/></span>
          <span><AppModal formType="login" className="splash-join-btn-login" text="Sign in"/></span>
        </div>
      </div>
    );
  }

}

export default SplashPage;
