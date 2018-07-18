import React from "react";

const BasicList = props => {
  return (
    <ul>{props.list.map((item, index) => <li key={index}>{item}</li>)}</ul>
  );
};

const Details = props => {
  const { onClick, recipe } = props;
  return (
    <div>
      <button onClick={onClick}>Close</button>
      <h1>{recipe.title}</h1>
      <BasicList list={recipe.ingredients} />
      <BasicList list={recipe.equipment} />
      <span>Prep time: {recipe.preparationTime}mins</span>
      <BasicList list={recipe.preparationSteps} />
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
