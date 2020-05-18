import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './productReducer';
import userReducer from './userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store