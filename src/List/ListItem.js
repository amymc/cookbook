import React from "react";
// import { connect } from "react-redux";

const ListItem = props => {
  return <li> {props.recipe.title}</li>;
};

// const mapStateToProps = state => ({
//   recipes: state.recipes
// });

// export default connect(
//   mapStateToProps,
//   null
// )(List);

export default ListItem;
