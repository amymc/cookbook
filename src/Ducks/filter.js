const SET_FILTER = "SET_FILTER";
export function filter(filterBy) {
  return {
    type: SET_FILTER,
    filterBy
  };
}

export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filterBy;
    default:
      return state;
  }
};
