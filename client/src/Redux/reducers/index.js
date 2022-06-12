import {combineReducers} from "redux";

import { userReducer } from "../reducers/user";
import { carReducer } from "../reducers/voiture";
import { contactReducer } from "../reducers/contact";

export const rootReducer = combineReducers({userReducer,carReducer,contactReducer});