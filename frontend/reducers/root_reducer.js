import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';
import CommentsReducer from './comments_reducer';
import TagsReducer from './tags_reducer';
import TaggingsReducer from './taggings_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  users: UsersReducer,
  tags: TagsReducer,
  taggings: TaggingsReducer,
  errors: ErrorsReducer,
  comments: CommentsReducer
});

export default RootReducer;
