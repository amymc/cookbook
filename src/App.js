import React, { Component } from "react";
import { connect } from "react-redux";
import Details from "./Details";
import Button from "./Button";
import List from "./List";
import "./App.css";

const filterOptions = [
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

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.selectedRecipe ? (
          <Details recipe={this.props.selectedRecipe} />
        ) : (
          <div>
            {filterOptions.map((option, index) => (
              <Button
                filter_by={option.filter_by}
                onClick={this.props.filter}
                text={option.text}
                key={index}
              />
            ))}
            <List />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipes: state.recipes,
  selectedRecipe: state.recipes.find(recipe => recipe.isSelected === true)
});

export default connect(
  mapStateToProps,
  null
)(App);
