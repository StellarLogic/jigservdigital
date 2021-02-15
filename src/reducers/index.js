import { combineReducers } from "redux";
import menuReducer from "./menu";
import commonReducer from "./common";
import compare from "./compare";

export default combineReducers({
  menu: menuReducer,
  common: commonReducer,
  compare,
});
