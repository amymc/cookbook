import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

export const getFilteredList = (recipes, filter) => {
  console.log("hey", filter);
  switch (filter) {
    case "SHOW_ALL":
      return recipes;
    case "TIME":
      return recipes.filter(recipe => recipe.preparationTime < 30);
    case "GOCHUJANG_ONION":
      return recipes.filter(
        recipe =>
          recipe.ingredients.find(ingredient => /onion/.test(ingredient)) &&
          recipe.ingredients.find(ingredient => /Gochujang/.test(ingredient))
      );
  }
};

// const List = props => {
class List extends Component {
  render() {
    return (
      <ul>
        {this.props.recipes.map((recipe, index) => (
          <ListItem recipe={recipe} key={index} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  recipes: getFilteredList(state.recipes, state.filter),
  filterBy: state.filter
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   filter: () => dispatch(filter(ownProps.filter))
// });

export default connect(
  mapStateToProps,
  null
)(List);
