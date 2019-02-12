import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="jumbotron ">
        <div className="container">
          <div className="row" style="height: 50vh;">
            <div className="col-sm" />
            <div className="col-sm text-center">
              <p>App Specific Content</p>
              <Link to="/register" className="btn btn-primary">
                Get Started Now!
              </Link>
            </div>
            <div className="col-sm" />
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Landing);
