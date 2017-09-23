import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AppModal from '../../misc_tools/modal';
import LoginFormContainer from '../session_form/login_form_container';
import configureStore from '../../../store/store';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const demoUser = {username:"demo", password: "password"};
    return (
      <div>
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
        hello
      </div>
    );
  }

}

export default SplashPage;
