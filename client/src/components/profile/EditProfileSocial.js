import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class EditProfileSocial extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

EditProfileSocial.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(EditProfileSocial);
