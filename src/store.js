import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  cart: {} ,
  favorite: {},
});

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);