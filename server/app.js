var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/athena");

const passport = require("passport");
const User = require("./models/user");
const config = require("./config");
const { Strategy, ExtractJwt } = require("passport-jwt");

var index = require("./routes/index");
var users = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

const Strategy = new Strategy(
  {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    User.findById(payload.id).then(user => {
      if (user) {
        done(null, user);
      } else {
        done(new Error("user not found"));
      }
    });
  }
);

passport.use(strategy);
app.use("/", require("./routes/index"));
app.use("/api", require("./routes/auth"));

app.get(
  "/api/secret",
  passport.authenticate("jwt", config.jwtSession),
  (req, res) => {
    res.json(req.user);
  }
);

// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", index);
// app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
