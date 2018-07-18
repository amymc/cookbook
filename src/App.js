import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteRecipe, showRecipe } from "./Ducks/recipes";
import Details from "./Details";
import Button from "./Button";
import List from "./List";
import "./App.css";

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
    case "SHOW_ALL":
      return recipes;
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
  }
};

class App extends Component {
  render() {
    const { props } = this;
    return (
      <div className="App">
        {props.selectedRecipe ? (
          <Details recipe={props.selectedRecipe} onClick={props.showRecipe} />
        ) : (
          <div>
            {filterOptions.map((option, index) => (
              <Button
                filter_by={option.filter_by}
                onClick={props.filter}
                text={option.text}
                key={index}
              />
            ))}
            <List
              recipes={props.recipes}
              deleteRecipe={props.deleteRecipe}
              showRecipe={props.showRecipe}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  filterBy: state.filter,
  recipes: getFilteredList(state.recipes, state.filter),
  selectedRecipe: state.recipes.find(recipe => recipe.isSelected === true)
});

const mapDispatchToProps = dispatch => ({
  deleteRecipe: bindActionCreators(deleteRecipe, dispatch),
  showRecipe: bindActionCreators(showRecipe, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
