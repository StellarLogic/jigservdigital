import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState
  // composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
