import React from 'react';
import SplashPageContainer from './main_body/splash/splash_page_container';
import StreamPageContainer from './main_body/stream/stream_page_container';
import LoginFormContainer from './main_body/session_form/login_form_container';
import SignupFormContainer from './main_body/session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserPageMainContainer from './main_body/user_page/user_page_main_container';
import TrackPageMainContainer from './main_body/track_page/track_page_main_container';
import MusicPlayer from './play_bar/music_player';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      active: null,
      play: false
    };
  }

  onIndexChanged(newState) {
    console.log(newState);
    this.setState({ tracks: newState.tracks, track: newState.track, play: newState.play });
  }


  render () {
    console.log(this.state);
    return (
      <div>
        <Route path='/' component={NavBarContainer} />
        <div className="main-body">
          <Switch>
            <AuthRoute exact path="/" component={SplashPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/stream" component={StreamPageContainer} />
            <Route path="/tracks/:trackId" component={TrackPageMainContainer} />
            <Route path="/:username" component={() =>
                <UserPageMainContainer callbackApp={
                    (newState) => this.onIndexChanged(newState)
                  }
                />
            }/>
          </Switch>
        </div>
        <MusicPlayer trackData={this.state}/>
      </div>
    );
  }
}

export default App;
