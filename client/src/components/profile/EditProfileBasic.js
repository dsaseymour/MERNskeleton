import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class EditProfileBasic extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

EditProfileBasic.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(EditProfileBasic);
