import React from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { filter } from "./Ducks/filter";

const button = css({
  padding: "5px",
  borderRadius: "4px",
  margin: "2px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#1da1f2",
    color: "white"
  }
});

const Button = props => {
  return (
    <button className={button} onClick={props.filter}>
      {props.text}
    </button>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  filter: () => dispatch(filter(ownProps.filter_by))
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
