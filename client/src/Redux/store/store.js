import {createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { userReducer } from "../reducers/user";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;


export const rootReducer = combineReducers({userReducer})
export const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))