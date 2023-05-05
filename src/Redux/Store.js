import { combineReducers, createStore } from "redux";
import { reducer as watchReducer } from "./WatchReducer/reducer";
import { reducer as jwelleryReducer } from "./jwelleryReducer/reducer";

const MainReducer = combineReducers({ watchReducer, jwelleryReducer });

export const store = createStore(MainReducer);
