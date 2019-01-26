app.get(
  "/auth/google",
  passport.authenticate("facebookToken", { session: false }),
  UsersController.facebookAuth
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login"
  }),
  function(req, res) {
    res.redirect("/");
  }
);
