import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import ErrorsReducer from './errors_reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  errors: ErrorsReducer,
  loadingBar: loadingBarReducer
});

export default RootReducer;
