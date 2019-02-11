import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import store from "./store";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";
import logo from "./logo.svg";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

//If we have a jwttoken stored, set as the default for requests
//check if the jwttoken has expired as well
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decodedToken = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decodedToken));
  const currentTime = Date.now() / 1000;
  //if the token has expired logout
  if (decodedToken.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    <Provider store={store}>
      <Router history={browserHistory} />
    </Provider>;
  }
}

export default App;

/*
      <Provider store={store}>
        <Router history={browserHistory}>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/:handle/profileoverview"
                component={ProfileOverview}
              />

              <Switch>
                <PrivateRoute
                  exact
                  path="/userdashboard"
                  component={UserDashboard}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/:handle/edit-profile/basic"
                  component={EditProfileBasic}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/:handle/edit-profile/socialmedia"
                  component={EditProfileSocial}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/:handle/edit-profile/bio"
                  component={EditProfileBio}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/:handle/myprofileoverview"
                  component={MyProfileOverview}
                />
              </Switch>

      <Switch>
                <PrivateRoute
                  exact
                  path="/:handle/usersettingsaccount"
                  component={UserSettingsAccount}
                />
              </Switch>

        <Switch>
                <PrivateRoute
                  exact
                  path="/:handle/usersettingspassword"
                  component={UserSettingsPassword}
                />
              </Switch>


              <Switch>
                <Route
                  exact
                  path="/help"
                  component={Help}
                />
              </Switch>



              <Route exact path="/not-found" component={NotFound} />
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
   */
