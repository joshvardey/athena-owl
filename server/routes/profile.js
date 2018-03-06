const express = require("express");
const router = express.Router();
const Thread = require("../models/thread");
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const Dab = require("../models/dab");
const Vote = require("../models/vote");

//collect all user votes and threads created

router.get("/profile/:id", (req, res, next) => {
  const profileId = req.params.id;
  Promise.all([
    User.findById(profileId),
    Thread.find({ creator: profileId }),
    Vote.find({ dabCreator: profileId }),
    Dab.find({ creator: profileId })
  ]).then(([user, threads, votes, dabs]) => {
    user = user.toObject();
    user.threads = threads;
    user.votes = votes;
    user.dabs = dabs;
    res.json(user);
  });
});

module.exports = router;
