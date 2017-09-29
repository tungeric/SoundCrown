import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/stream" />
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )}/>
);

const Props = ({component: Component, path}) => (
  <Route path={path} render={(props) => {
      return <Component {...props} />;
    }}
  />
);



const mapStateToProps = (state, props) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    props: props
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const PropsRoute = withRouter(connect(mapStateToProps, null)(Props));
