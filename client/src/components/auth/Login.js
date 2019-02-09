import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik, FormikProps, Form, Field } from "formik";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  async responseGoogle(res) {
    await this.props.authGoogle(res.accessToken);
    this.props.history.push("/dashboard");
  }

  async responseFacebook(res) {
    await this.props.authFacebook(res.accessToken);
    this.props.history.push("/dashboard");
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        Test<p>ing</p>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
