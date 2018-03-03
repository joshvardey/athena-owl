const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "my-images",
  allowedFormats: ["jpg", "png", "gif"]
});

const parser = multer({ storage });

router.post("/signup", parser.single("picture"), (req, res, next) => {
  const { username, name, password } = req.body;
  const { file } = req;
  const user = new User({
    username,
    name,
    picture: file.secure_url
  });

  User.register(user, password, err => {
    if (err) return next(err);
    res.json({ success: true });
  });
});

const authenticate = User.authenticate();
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    authenticate(username, password, (err, user, failed) => {
      if (err) {
        return next(err);
      }
      if (failed) {
        return res.status(401).json({
          error: failed.message
        });
      }
      if (user) {
        const payload = {
          id: user.id
        };
        const token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token,
          name: user.name,
          picture: user.picture
        });
      }
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
