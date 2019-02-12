import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class EditProfileBio extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

EditProfileBio.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(EditProfileBio);
