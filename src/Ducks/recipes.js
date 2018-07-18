const SHOW_RECIPE = "SHOW_RECIPE";
export function showRecipe(title) {
  console.log("SHOW_RECIPE", title);
  return {
    type: SHOW_RECIPE,
    title
  };
}

const DELETE_RECIPE = "DELETE_RECIPE";
export function deleteRecipe(title) {
  console.log("SHOW_RECIPE", title);
  return {
    type: DELETE_RECIPE,
    title
  };
}

export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_RECIPE:
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
