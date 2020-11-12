import { combineReducers } from 'redux';
import { dadosReducer } from '../reducer';


const rootReducer = combineReducers({
  dadosReducer,
});

export default rootReducer;
