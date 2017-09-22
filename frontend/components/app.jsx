import React from 'react';
import SplashPageContainer from './main_body/splash/splash_page_container';
import StreamPageContainer from './main_body/stream/stream_page_container';
import LoginFormContainer from './main_body/session_form/login_form_container';
import SignupFormContainer from './main_body/session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserPageMainContainer from './main_body/user_page/user_page_main_container';
import TrackPageMainContainer from './main_body/track_page/track_page_main_container';
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
  }

  render () {
    return (
      <div>
        <Route path='/' component={NavBarContainer} />
        <div className="main-body">
          <Switch>
            <Route exact path="/" component={SplashPageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/stream" component={StreamPageContainer} />
            <Route path="/tracks/:trackId" component={TrackPageMainContainer} />
            <Route path="/:username" component={UserPageMainContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
