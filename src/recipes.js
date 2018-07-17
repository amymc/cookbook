export const SHOW_RECIPE = "SHOW_RECIPE";
export function showRecipe(title) {
  console.log("SHOW_RECIPE", title);
  return {
    type: SHOW_RECIPE,
    title
  };
}

export const DELETE_RECIPE = "DELETE_RECIPE";
export function deleteRecipe(title) {
  console.log("SHOW_RECIPE", title);
  return {
    type: DELETE_RECIPE,
    title
  };
}

export const recipesReducer = (state = [], action) => {
  //   let nextState = state;
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
    //   state.filter(({ id }) => id !== action.data)
    default:
      return state;
  }
};

//   import * as types from '../constants/actiontypes';

//   function projects(state = [], action) {
//     switch (action.type) {

//       case types.OPEN_PROJECT:
//         return state.map(project =>
//           project.title === action.title ?
//             { ...project, isOpen: true, isSelected: true } :
//             { ...project, isSelected: false }
//         )

//       case types.CLOSE_PROJECT:
//         return state.map(project =>
//           project.title === action.title ?
//             { ...project, isOpen: false } :
//             project
//         )

//         default:
//           return state;
//       }
//   }

//   export default projects;
