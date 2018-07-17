import { combineReducers } from "redux";
import { filterReducer } from "./filter";
import { recipesReducer } from "./recipes";

export default combineReducers({
  recipes: recipesReducer,
  filter: filterReducer
});
