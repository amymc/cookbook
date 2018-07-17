import React from "react";
import { bindActionCreators } from "redux";
import { deleteRecipe, showRecipe } from "../recipes";
import { connect } from "react-redux";

const ListItem = props => {
  return (
    <li onClick={() => props.showRecipe(props.recipe.title)}>
      {props.recipe.title}
      <button onClick={() => props.deleteRecipe(props.recipe.title)}>
        {" "}
        X{" "}
      </button>
    </li>
  );
};

// const mapStateToProps = state => ({
//   recipes: state.recipes
// });

const mapDispatchToProps = dispatch => ({
  deleteRecipe: bindActionCreators(deleteRecipe, dispatch),
  showRecipe: bindActionCreators(showRecipe, dispatch)
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
