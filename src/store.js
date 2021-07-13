import { noteReducer } from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ notes: noteReducer, filter: filterReducer });
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
