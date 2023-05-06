import { applyMiddleware, combineReducers,  legacy_createStore } from "redux";
import { reducer as watchReducer } from "./WatchReducer/reducer";
import {reducer as AdminProduct} from "./AdminProduct/reducer"
import thunk from "redux-thunk";
const MainReducer = combineReducers({ watchReducer,AdminProduct });

export const store = legacy_createStore(MainReducer,applyMiddleware(thunk));
