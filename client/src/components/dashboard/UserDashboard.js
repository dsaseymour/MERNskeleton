import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UserDashboard extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

UserDashboard.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(UserDashboard);
