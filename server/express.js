const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const app = express();
/* Express configuration begins*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
/* Express configuration ends*/

export default app;
