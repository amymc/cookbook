import React, { Component } from "react";
import { connect } from "react-redux";
import Details from "./Details";
import List from "./List";
import "./App.css";

class App extends Component {
  render() {
    const selectedRecipe = this.props.recipes.find(
      recipe => recipe.isSelected === true
    );

    return (
      <div className="App">
        {selectedRecipe ? <Details recipe={selectedRecipe} /> : <List />}
      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => ({
  recipes: state.recipes
});

// const mapDispatchToProps = dispatch => ({
//   onClick: bindActionCreators(showRecipe, dispatch)
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     onClick: title => dispatch(showRecipe(title))
//   };
// }

export default connect(
  mapStateToProps,
  null
)(App);
