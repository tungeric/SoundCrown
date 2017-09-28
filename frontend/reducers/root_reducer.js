import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  users: UsersReducer,
  errors: ErrorsReducer,
  comments: CommentsReducer
});

export default RootReducer;
