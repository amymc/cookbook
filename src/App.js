import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { filter } from "./filter";
import Details from "./Details";
import Button from "./Button";
import List from "./List";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.selectedRecipe ? (
          <Details recipe={this.props.selectedRecipe} />
        ) : (
          <div>
            <Button
              filter_by="TIME"
              onClick={this.props.filter}
              text="Show quick recipes"
            />
            <Button
              filter_by="RICE_COOKER"
              onClick={this.props.filter}
              text="I've got a rice cooker and I want to use it!"
            />
            <Button
              filter_by="GOCHUJANG_ONION"
              onClick={this.props.filter}
              text="I've got onion and Gochujang, show me recipes!"
            />
            {/* <button onClick={() => this.props.filter()} filter="time">
              Show quick recipes
            </button>
            <button onClick={() => this.props.filter()} filter="riceCooker">
              Show rice cooker recipes
            </button>
            <button onClick={() => this.props.filter()} filter="onion">
              Show onion recipes
            </button>
            <button onClick={() => this.props.filter()} filter="time">
              Clear filter
            </button> */}
            <List />
          </div>
        )}
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state, ownProps) => ({
  recipes: state.recipes,
  selectedRecipe: state.recipes.find(recipe => recipe.isSelected === true)
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   filter: bindActionCreators(filter(ownProps.filter), dispatch)
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   filter: () => dispatch(filter(ownProps.filter))
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     filter: filterBy => dispatch(filter(filterBy))
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default connect(
  mapStateToProps,
  null
)(App);
