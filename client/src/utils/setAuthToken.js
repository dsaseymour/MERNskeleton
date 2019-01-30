/*
If a token is provided to this function 
that token will be applied as the default value for the authorization header of every request
*/
import axios from "axios";
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
