import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

const List = props => {
  return <ul> {this.props}</ul>;

  //   return <ul> {this.props.recipes.map((recipe, index) => <ListItem />)}</ul>;
};

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(
  mapStateToProps,
  null
)(List);
