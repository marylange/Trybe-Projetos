//importe o método applyMiddleware
import { createStore, applyMiddleware } from 'redux';
//importe o redux-thunk
import ReduxThunk from 'redux-thunk';
import reducer from '../reducer/reducer';

//aplique o middleware
const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
