import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UserSettingsAccount extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

UserSettingsAccount.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(UserSettingsAccount);
