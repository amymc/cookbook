import React from "react";
import { css } from "emotion";
import ListItem from "./ListItem";

const list = css({
  width: "100%",
  listStyleType: "none"
});

const List = props => {
  return (
    <ul className={list}>
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
