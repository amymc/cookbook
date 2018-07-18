const TOGGLE_RECIPE_DETAILS = "TOGGLE_RECIPE_DETAILS";
export function toggleRecipeDetails(title) {
  return {
    type: TOGGLE_RECIPE_DETAILS,
    title
  };
}

const DELETE_RECIPE = "DELETE_RECIPE";
export function deleteRecipe(title) {
  return {
    type: DELETE_RECIPE,
    title
  };
}

export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_RECIPE_DETAILS:
      return state.map(
        recipe =>
          recipe.title === action.title
            ? { ...recipe, isSelected: true }
            : { ...recipe, isSelected: false }
      );
    case DELETE_RECIPE:
      return state.filter(recipe => recipe.title !== action.title);
    default:
      return state;
  }
};
