import { combineReducers } from "redux";
import list from "./List/reducer";

export default combineReducers({
  recipes: list
});
