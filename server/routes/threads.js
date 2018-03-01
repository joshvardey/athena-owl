const express = require("express");
const router = express.Router();
const Thread = require("../models/thread");
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const Dab = require("../models/dab");

// Get threads

router.get("/", (req, res, next) => {
  res.json("/threads");
});

// Create a new thread

router.post(
  "/",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const threadInfo = new Thread({
      creator: req.user.id,
      title: req.body.title,
      tag: req.body.tag
    });
    threadInfo.save((err, threadInfo) => {
      if (err) {
        return next(err);
      }
      res.json(threadInfo);
    });
  }
);

// get specific thread

router.get("/:threadId", (req, res, next) => {
  Thread.findById(req.params.threadId, (err, thread) => {
    if (err) {
      return err;
    }
    res.json(thread);
  });
});

// post dab on thread

router.post(
  "/:threadid/dabs",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const { link, description, opinion } = req.body;
    const creator = req.user.id;
    const newDab = new Dab({
      link,
      description,
      opinion,
      creator
    });

    newDab.save((err, dab) => {
      if (err) {
        return err;
      }
      Thread.findByIdAndUpdate(
        req.params.threadId,
        { $push: { dabs: dab._id } },
        (err, thread) => {
          if (err) {
            return err;
          }
          res.json(dab);
        }
      );
    });
  }
);

// delete dabs
// delete thread

module.exports = router;
