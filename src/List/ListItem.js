import React from "react";

const ListItem = props => {
  return (
    <li onClick={() => props.toggleRecipeDetails(props.recipe.title)}>
      {props.recipe.title}
      <button onClick={() => props.deleteRecipe(props.recipe.title)}>
        {" "}
        X{" "}
      </button>
    </li>
  );
};

export default ListItem;
