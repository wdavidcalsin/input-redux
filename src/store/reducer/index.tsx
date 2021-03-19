import { combineReducers } from "redux";
import { add } from "./add.reducer";

export const rootReducer = combineReducers({ add: add });
