import React from 'react';
import SplashPageContainer from './main_body/splash/splash_page_container';
import StreamPageContainer from './main_body/stream/stream_page_container';
import LoginFormContainer from './main_body/session_form/login_form_container';
import SignupFormContainer from './main_body/session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserPageMainContainer from './main_body/user_page/user_page_main_container';
import TrackPageMainContainer from './main_body/track_page/track_page_main_container';
import MusicPlayerContainer from './play_bar/music_player_container';
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
    let tracksDataForPlayer = newState.tracks.map((track => track.dataForPlayer));
    this.setState({ tracks: tracksDataForPlayer, active: newState.track.dataForPlayer, play: newState.play });
  }


  render () {
    console.log(this.state);
    return (
      <div>
        <div className="nav-bar-container">
          <Switch>
            <AuthRoute exact path="/" component={SplashPageContainer} />
            <Route path='/' component={NavBarContainer} />
          </Switch>
        </div>
        <div className="main-body">
          <Switch>
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
        <MusicPlayerContainer trackData={this.state}/>
      </div>
    );
  }
}

export default App;
