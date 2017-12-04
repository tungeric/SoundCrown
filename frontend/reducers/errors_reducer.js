import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import TracksErrorsReducer from './tracks_errors_reducer';
import UsersErrorsReducer from './users_errors_reducer';
import CommentsErrorsReducer from './comments_errors_reducer';
import TagsErrorsReducer from './tags_errors_reducer';


const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  tracks: TracksErrorsReducer,
  users: UsersErrorsReducer,
  comments: CommentsErrorsReducer,
  tags: TagsErrorsReducer
});

export default ErrorsReducer;
