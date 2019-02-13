import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

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
    //    console.log(nextProps);
    // console.log(this.props);
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/userdashboard");
    }
    /*

    }*/
  }

  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{
            username: " ",
            password: " "
          }}
          validate={values => {
            let errors = {};
            if (!values.username) {
              errors.username = "Email is Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            ) {
              errors.username = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.props.loginUser({
              username: values.username,
              password: values.password
            });
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              {this.props.errors ? (
                <div>{JSON.stringify(this.props.errors.error)}</div>
              ) : null}
              <Field type="email" name="username" />
              <ErrorMessage name="username" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
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
