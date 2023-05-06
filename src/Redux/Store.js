import { applyMiddleware, combineReducers,  legacy_createStore } from "redux";
import { reducer as watchReducer } from "./WatchReducer/reducer";
import {reducer as AdminProduct} from './AdminProduct/reducer'
import {reducer as jewlleryReducer} from './jwelleryReducer/reducer'
import thunk from "redux-thunk";
const MainReducer = combineReducers({ watchReducer,AdminProduct,jewlleryReducer });

export const store = createStore(MainReducer,applyMiddleware(thunk));
