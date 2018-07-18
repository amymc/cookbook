import { combineReducers } from "redux";
import { filterReducer } from "./Ducks/filter";
import { recipesReducer } from "./Ducks/recipes";

export default combineReducers({
  recipes: recipesReducer,
  filter: filterReducer
});
