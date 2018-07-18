import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { css } from "emotion";
import { deleteRecipe, toggleRecipeDetails } from "./Ducks/recipes";
import Details from "./Details";
import Button from "./Button";
import List from "./List";

const app = css({
  display: "flex",
  flexDirection: "row"
});

const buttonWrapper = css({
  display: "flex",
  flexDirection: "column",
  width: "150px",
  alignSelf: "center",
  justifyContent: "center"
});

const filterOptions = [
  { filter_by: "SHOW_ALL", text: "Clear filters" },
  { filter_by: "TIME", text: "Show quick recipes" },
  {
    filter_by: "RICE_COOKER",
    text: "I've got a rice cooker and I want to use it!"
  },
  {
    filter_by: "GOCHUJANG_ONION",
    text: "I've got onion and Gochujang, show me recipes!"
  }
];

const getFilteredList = (recipes, filter) => {
  switch (filter) {
    case "TIME":
      return recipes.filter(recipe => recipe.preparationTime < 30);
    case "RICE_COOKER":
      return recipes.filter(recipe => recipe.equipment.includes("Rice Cooker"));
    case "GOCHUJANG_ONION":
      return recipes.filter(
        recipe =>
          recipe.ingredients.find(ingredient => /onion/.test(ingredient)) &&
          recipe.ingredients.find(ingredient => /Gochujang/.test(ingredient))
      );
    default:
      return recipes;
  }
};
const App = props => {
  return (
    <div className={app}>
      {props.selectedRecipe ? (
        <Details
          recipe={props.selectedRecipe}
          onClick={props.toggleRecipeDetails}
        />
      ) : (
        <React.Fragment>
          <div className={buttonWrapper}>
            {filterOptions.map((option, index) => (
              <Button
                filter_by={option.filter_by}
                text={option.text}
                key={index}
              />
            ))}
          </div>
          <List
            recipes={props.recipes}
            deleteRecipe={props.deleteRecipe}
            toggleRecipeDetails={props.toggleRecipeDetails}
          />
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  filterBy: state.filter,
  recipes: getFilteredList(state.recipes, state.filter),
  selectedRecipe: state.recipes.find(recipe => recipe.isSelected === true)
});

const mapDispatchToProps = dispatch => ({
  deleteRecipe: bindActionCreators(deleteRecipe, dispatch),
  toggleRecipeDetails: bindActionCreators(toggleRecipeDetails, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
