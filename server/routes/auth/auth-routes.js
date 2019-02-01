app.get(
  "/google",
  passport.authenticate("facebookToken", { session: false }),
  UsersController.facebookAuth
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login"
  }),
  function(req, res) {
    res.redirect("/");
  }
);
