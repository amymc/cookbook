import React from "react";
import { bindActionCreators } from "redux";
import { showRecipe } from "../recipes";
import { connect } from "react-redux";

const ListItem = props => {
  return (
    <li onClick={() => props.onClick(props.recipe.title)}>
      {props.recipe.title}
    </li>
  );
};

// const mapStateToProps = state => ({
//   recipes: state.recipes
// });

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(showRecipe, dispatch)
});

// function mapDispatchToProps(dispatch) {
//   return {
//     onClick: title => dispatch(showRecipe(title))
//   };
// }

export default connect(
  null,
  mapDispatchToProps
)(ListItem);

// export default ListItem;
