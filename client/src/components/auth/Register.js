import { Formik, FormikProps, Form, Field } from "formik";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  registerUser,
  authFacebookRegister,
  authGoogleRegister
} from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

class Register extends Component {
  static propTypes = {
    prop: PropTypes
  };

  async responseGoogle(res) {
    await this.props.authGoogle(res.accessToken);
    this.props.history.push("/userdashboard");
  }

  async responseFacebook(res) {
    await this.props.authFacebook(res.accessToken);
    this.props.history.push("/userdashboard");
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/userdashboard");
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/userdashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    return <div />;
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    registerUser,
    authGoogleRegister,
    authFacebookRegister
  }
)(withRouter(Register));
