import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showRecipe } from "../recipes";

const Details = props => {
  const { recipe } = props;
  return (
    <div>
      <button onClick={props.showRecipe}>X</button>
      <h1>{recipe.title}</h1>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ul>
        {recipe.equipment.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <span>{recipe.preparationTime}mins</span>
      <ul>
        {recipe.preparationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      {recipe.hints && (
        <ul>
          {recipe.hints.map((hint, index) => (
            <li key={index}>
              <h3>{hint.title}</h3>
              <span>{hint.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  showRecipe: bindActionCreators(showRecipe, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Details);
