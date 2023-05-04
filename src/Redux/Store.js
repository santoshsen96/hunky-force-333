import { combineReducers, createStore } from "redux";
import { reducer as watchReducer } from "./WatchReducer/reducer";

const MainReducer = combineReducers({ watchReducer });

export const store = createStore(MainReducer);
