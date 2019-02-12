import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyProfileOverview extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div />;
  }
}

MyProfileOverview.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(MyProfileOverview);
