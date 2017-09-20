import React from 'react';
import SplashPageContainer from './main_body/splash/splash_page_container';
import StreamPageContainer from './main_body/stream/stream_page_container';
import SessionButtonsContainer from './nav_bar/session_buttons_container';
import SessionFormContainer from './main_body/session_form/session_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav>
      <SessionButtonsContainer />
    </nav>
    <h1>SoundCrown</h1>
    <div className="main-body">
      <Switch>
        <AuthRoute exact path="/" component={SplashPageContainer} />
        <ProtectedRoute path="/stream" component={StreamPageContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
