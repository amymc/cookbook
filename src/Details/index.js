import React from "react";
import { css } from "emotion";

const button = css({
  alignSelf: "flex-end",
  padding: "5px",
  borderRadius: "4px",
  margin: "2px",
  cursor: "pointer",
  width: "120px",
  height: "40px",
  "&:hover": {
    backgroundColor: "#1da1f2",
    color: "white"
  }
});

const details = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "20px"
});

const list = css({
  listStyleType: "none",
  paddingLeft: 0
});

const BasicList = props => {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <ul className={list}>
        {props.list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </React.Fragment>
  );
};

const Details = props => {
  const { onClick, recipe } = props;
  return (
    <div className={details}>
      <button className={button} onClick={onClick}>
        Close
      </button>
      <h1>{recipe.title}</h1>
      <BasicList list={recipe.ingredients} title="Ingredients" />
      <BasicList list={recipe.equipment} title="Equipment" />
      <span>Prep time: {recipe.preparationTime}mins</span>
      <BasicList list={recipe.preparationSteps} title="Preparation steps" />
      {recipe.hints && (
        <ul className={list}>
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
