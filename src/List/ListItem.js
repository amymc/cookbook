import React from "react";
import { css } from "emotion";

const listItem = css({
  display: "flex",
  justifyContent: "space-between",
  width: "350px",
  marginTop: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "grey",
    color: "white"
  }
});

const button = css({
  "&:hover": {
    backgroundColor: "red",
    color: "white"
  }
});

const ListItem = props => {
  return (
    <li
      className={listItem}
      onClick={() => props.toggleRecipeDetails(props.recipe.title)}
    >
      {props.recipe.title}
      <button
        className={button}
        onClick={() => props.deleteRecipe(props.recipe.title)}
      >
        {" "}
        X{" "}
      </button>
    </li>
  );
};

export default ListItem;
