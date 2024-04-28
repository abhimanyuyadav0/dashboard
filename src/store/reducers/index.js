import { combineReducers } from 'redux';
import menuReducer from './menu';
import mediaFilesReducer from './mediaFiles';
import userReducer from './user';

const reducers = combineReducers({
  menu: menuReducer,
  mediaFiles: mediaFilesReducer,
  user: userReducer
});

export default reducers;