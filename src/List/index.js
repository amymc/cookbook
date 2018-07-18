import React, { Component } from "react";
import ListItem from "./ListItem";

const List = props => {
  return (
    <ul>
      {props.recipes.map((recipe, index) => (
        <ListItem
          recipe={recipe}
          key={index}
          deleteRecipe={props.deleteRecipe}
          showRecipe={props.showRecipe}
        />
      ))}
    </ul>
  );
};

export default List;
