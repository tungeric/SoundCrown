import React from 'react';
import SplashPageContainer from './main_body/splash/splash_page_container';
import StreamPageContainer from './main_body/stream/stream_page_container';
import LoginFormContainer from './main_body/session_form/login_form_container';
import SignupFormContainer from './main_body/session_form/signup_form_container';
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
    <div className="main-body">
      <Switch>
        <AuthRoute exact path="/" component={SplashPageContainer} />
        <ProtectedRoute path="/stream" component={StreamPageContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
