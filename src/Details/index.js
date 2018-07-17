import React from "react";

const Details = props => {
  const { recipe } = props;
  return (
    <div>
      <h1>{recipe.title}</h1>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ul>
        {recipe.equipment.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
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

export default Details;
