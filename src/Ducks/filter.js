const SET_FILTER = "SET_FILTER";
export function filter(filterBy) {
  console.log("SET_FILTER", filterBy);
  return {
    type: SET_FILTER,
    filterBy
  };
}

export const filterReducer = (state = "SHOW_ALL", action) => {
  console.log("action", action);
  switch (action.type) {
    case "SET_FILTER":
      return action.filterBy;
    default:
      return state;
  }
};
