export const deleteUserAccount = () => {
  return async dispatch => {
    try {
      if (window.confirm("Are you sure? This can NOT be undone!")) {
        const deleteAccountResponse = await axios.delete("/api/user/");
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        });
      }
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    }
  };
};
