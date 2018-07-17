import React, { Component } from "react";
import { connect } from "react-redux";
import { filter } from "./filter";

// const List = props => {
class Button extends Component {
  render() {
    return <button onClick={this.props.filter}>{this.props.text}</button>;
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  filter: () => dispatch(filter(ownProps.filter_by))
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
// export default Button;
