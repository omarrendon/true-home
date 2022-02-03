import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchFlightsReducer from "./reducers/fetchFlightsReducer";

const reducers = combineReducers({
  flights: fetchFlightsReducer
});

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);