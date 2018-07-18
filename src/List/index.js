import React from "react";
import ListItem from "./ListItem";

const List = props => {
  return (
    <ul>
      {props.recipes.map((recipe, index) => (
        <ListItem
          recipe={recipe}
          key={index}
          deleteRecipe={props.deleteRecipe}
          toggleRecipeDetails={props.toggleRecipeDetails}
        />
      ))}
    </ul>
  );
};

export default List;
