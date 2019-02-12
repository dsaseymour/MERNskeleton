import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import { Formik, FormikProps, Form, Field } from "formik";
class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authNav =( <nav class="navbar navbar-expand-lg  navbar-light bg-light">
    <form class="form-inline my-2 my-lg-0" style="display:inline; margin-right: 40vw ">
      <a class="navbar-brand" href="./userdashboard.php">
        <img src="../public/skull.svg" width="30" height="30" class="d-inline-block align-top rounded-circle" alt="" />
      </a>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <a class="btn btn-outline-success my-2 my-sm-0" href="./searchresults.php"><i class="fas fa-search"></i></a>
    </form>
  
  
    <a class="navbar-brand " href="./myprofileoverview.php">
      <img src="../public/danny.jpg" width="30" height="30" class="d-inline-block align-top rounded-circle" alt="" />
      Danny Seymour
    </a>
    <hr />
    <a href="./userdashboard.php" class="nav-item nav-link"><i class="fas fa-home"></i></a>
    <hr />
    <a href="./discover.php" class="nav-item nav-link"><i class="fas fa-compass"></i></a>
    <hr />
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./myprofileoverview.php">Put Display name here <br />
              @ Put Handle Here
              <div class="dropdown-divider"></div>
            </a>
            <a class="dropdown-item" href="./myprofileoverview.php">Profile</a>
            <a class="dropdown-item" href="./usersettingsaccount.php">User Settings</a>
            <a class="dropdown-item" href="./help.php">Help</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="./login.php">Log out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>);

    const guestNav =( <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="./landing.php">
    <img src="../public/skull.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
    MernSkeleton
  </a>

  <a href="./userdashboard.php" class="btn btn-primary">Login</a>
</nav>);

    return({isAuthenticated ? authNav : guestNav});
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
)(Navbar);
