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
    const { errors } = this.state;
    return (
      <div
        className="register container
"
      >
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
          </div>

          <div className="col">
            <Formik
              initialValues={{
                email: "",
                password: "",
                password2: ""
              }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {}}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="text" name="displayName" label="Full Name" />

                  <ErrorMessage name="displayName" component="div" />

                  <Field type="email" name="email" label="Email" />
                  <ErrorMessage name="email" component="div" />

                  <Field type="password" name="password" label="Password" />
                  <ErrorMessage name="password" component="div" />
                  <Field
                    type="password2"
                    name="password2"
                    label="Confirm Password"
                  />
                  <ErrorMessage name="password2" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
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
