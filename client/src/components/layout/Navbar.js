import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { Formik, FormikProps, Form, Field } from "formik";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authNav = (
      <nav class="navbar navbar-expand-lg  navbar-light bg-light">
        <Formik>
          <Form
            className="form-inline my-2 my-lg-0"
            style="display:inline; margin-right: 40vw "
          >
            <Link className="navbar-brand" to="./userdashboard">
              <img
                src="../img/skull.svg"
                width="30"
                height="30"
                className="d-inline-block align-top rounded-circle"
                alt=""
              />
            </Link>
            <Field
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link
              className="btn btn-outline-success my-2 my-sm-0"
              to="./searchresults"
            >
              <i className="fas fa-search" />
            </Link>
          </Form>
        </Formik>

        <Link className="navbar-brand " to="./myprofileoverview">
          <img
            src="../public/danny.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle"
            alt=""
          />
          Danny Seymour
        </Link>
        <hr />
        <Link to="./userdashboard" className="nav-item nav-link">
          <i className="fas fa-home" />
        </Link>
        <hr />
        <Link to="./discover" className="nav-item nav-link">
          <i className="fas fa-compass" />
        </Link>
        <hr />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="./myprofileoverview">
                  Put Display name here <br />@ Put Handle Here
                  <div className="dropdown-divider" />
                </Link>
                <Link className="dropdown-item" to="./myprofileoverview">
                  Profile
                </Link>
                <Link className="dropdown-item" to="./usersettingsaccount">
                  User Settings
                </Link>
                <Link className="dropdown-item" to="./help">
                  Help
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="./login">
                  Log out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );

    const guestNav = (
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="./landing">
          <img
            src="../public/skull.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          MernSkeleton
        </Link>

        <Link to="./userdashboard" className="btn btn-primary">
          Login
        </Link>
      </nav>
    );

    return <div>{isAuthenticated ? authNav : guestNav}</div>;
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(withRouter(Navbar));
