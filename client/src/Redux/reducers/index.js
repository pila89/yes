import {combineReducers} from "redux";

import { userReducer } from "../reducers/user";
import { carReducer } from "../reducers/voiture";

export const rootReducer = combineReducers({userReducer,carReducer});