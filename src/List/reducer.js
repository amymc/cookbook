const list = (state = [], action) => {
  switch (action.type) {
    case "WHATEVER":
      return [
        ...state,
        {
          // STUFF
        }
      ];
    default:
      return state;
  }
};

export default list;
