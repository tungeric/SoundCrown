import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// for testing purposes
import { signup, login, logout, receiveCurrentUser } from './actions/session_actions';
import { createTrack } from './actions/track_actions';
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store }/>, root);

  // for testing purposes
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.receiveCurrentUser = receiveCurrentUser;
  window.createTrack = createTrack;
  window.utillogin = SessionAPIUtil.login;
});
