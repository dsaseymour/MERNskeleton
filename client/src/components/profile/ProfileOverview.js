import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProfileOverview extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

ProfileOverview.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(ProfileOverview);
