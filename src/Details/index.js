import React from "react";
import { connect } from "react-redux";

const Details = props => {
  return <ul> {this.props.recipes.map((recipe, index) => <ListItem />)}</ul>;
};

const mapStateToProps = state => ({
  recipes: state.recipes
});

//   function mapDispatchToProps(dispatch) {
//     return {
//       sendText: event => dispatch(changeText(event.target.value)),
//       onClick: event => {
//         dispatch(changeText(''))
//       }
//     };
//   }

export default connect(
  mapStateToProps,
  null
)(Details);
