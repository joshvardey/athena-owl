const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const Dab = require("../models/dab");
const Vote = require("../models/vote");
const Thread = require("../models/thread");
const User = require("../models/user");

//collect all user votes and threads created

router.get("/:id", (req, res, next) => {
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
    user.dabs = dabs.map(dab => dab.toObject());
    return Promise.all(
      user.dabs.map(dab => {
        return Vote.find({ dab: dab._id }).then(votes => {
          dab.votes = votes;
        });
      })
    ).then(() => res.json(user));
  });
});

// delete dabs

router.delete(
  "/:dabId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const user = req.user._id;
    const dab = req.params.dabId;
    Dab.findById(dab, (err, deleteDab) => {
      if (user === deleteDab.creator.toString()) {
        Dab.findByIdAndRemove(dab, err => {
          if (err) next(err);
          res.json("deleted");
        });
      } else res.json("unauthorised");
    });
  }
);

// delete threads

router.delete(
  "/:threadId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const user = req.user._id;
    const thread = req.params.threadId;
    console.log(thread);
    Thread.findById(thread, (err, deleteThread) => {
      if (user === deleteThread.creator.toString()) {
        Thread.findByIdAndRemove(thread, err => {
          if (err) next(err);
          res.json("deleted");
        });
      } else res.json("unauthorised");
    });
  }
);

module.exports = router;
