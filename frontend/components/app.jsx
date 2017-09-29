import React from 'react';
import SplashPageContainer from './main_body/splash/splash_page_container';
import StreamPageContainer from './main_body/stream/stream_page_container';
import LoginFormContainer from './main_body/session_form/login_form_container';
import SignupFormContainer from './main_body/session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserPageMainContainer from './main_body/user_page/user_page_main_container';
import TrackPageMainContainer from './main_body/track_page/track_page_main_container';
import EditTrackFormContainer from './main_body/edit_track_form/edit_track_form_container';
import MusicPlayerContainer from './play_bar/music_player_container';
import TrackIndexNewContainer from './main_body/tracks/track_index_new_container';
import { UserNotFound } from './errors/user_not_found';
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
        active: null,
        play: false,
        tracks: []
    };
  }

  onIndexChanged(newState) {
    console.log(newState);
    let tracksDataForPlayer = newState.tracks.map((track => track.dataForPlayer));
    this.setState({ tracks: tracksDataForPlayer,
                    active: newState.track.dataForPlayer,
                    play: newState.play
                 });
  }

  onTrackPageChanged(newState) {
    let tracksDataForPlayer = [newState.track.dataForPlayer];
    this.setState({ tracks: tracksDataForPlayer,
                    active: newState.track.dataForPlayer,
                    play: newState.play
                 });
  }

  onMusicPlayerChanged(newState) {
    if(newState.active !== this.state.active ) {
      this.setState({
        active: newState.active
      });
    }
    if(newState.tracks !== this.state.tracks ) {
      this.setState({
        tracks: newState.tracks
      });
    }
    if(newState.play !== this.state.play ) {
      this.setState({
        play: newState.play
      });
    }
  }


  render () {
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
            <ProtectedRoute exact path="/stream/new" component={() =>
                <TrackIndexNewContainer trackData={this.state}
                                     callbackApp={
                (newState) => this.onIndexChanged(newState)}/>}/>
            <ProtectedRoute path="/:tracks/:trackId/edit" component={EditTrackFormContainer} />
            <Route path="/tracks/:trackId" component={() =>
                <TrackPageMainContainer trackData={this.state}
                                        callbackApp={
                (newState) => this.onTrackPageChanged(newState)}/>}/>
              <Route path="/user-not-found" component={UserNotFound} />
            <Route path="/:username" component={() =>
                <UserPageMainContainer trackData={this.state}
                                       callbackApp={
                                         (newState) => this.onIndexChanged(newState)
                                       }/>
            }/>
          </Switch>
        </div>
        <MusicPlayerContainer trackData={this.state}
                              callbackApp={
                                (newState) => this.onMusicPlayerChanged(newState)
                              }/>
      </div>
    );
  }
}

export default App;
