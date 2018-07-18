import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "./Ducks/filter";

const Button = props => {
  return <button onClick={props.filter}>{props.text}</button>;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  filter: () => dispatch(filter(ownProps.filter_by))
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
