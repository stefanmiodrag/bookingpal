import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from "../reducers";

const rootReducer = combineReducers(reducers);

const middlewares = [
  thunk,
];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
