import { combineReducers } from 'redux';
import menuReducer from './menu';
import mediaFilesReducer from './mediaFiles';

const reducers = combineReducers({
  menu: menuReducer,
  mediaFiles: mediaFilesReducer
});

export default reducers;