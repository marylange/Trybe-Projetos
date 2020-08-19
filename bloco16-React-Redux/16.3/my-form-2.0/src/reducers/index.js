import { combineReducers } from 'redux';
import emailReducer from '../reducers/emailReducer';
import nameReducer from '../reducers/nameReducer';

const rootReducer = combineReducers({ emailReducer, nameReducer });

export default rootReducer;