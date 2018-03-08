const express = require("express");
const router = express.Router();
const Thread = require("../models/thread");
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const Dab = require("../models/dab");
const Vote = require("../models/vote");
const scrape = require("html-metadata");

// Get threads

router.get("/", (req, res, next) => {
  Thread.find({}, (err, threads) => {
    if (err) return next(err);
    res.json(threads);
  });
});

// Create a new thread

router.post(
  "/",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const threadInfo = new Thread({
      creator: req.user.id,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags
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
  Thread.findById(req.params.threadId)
    .populate("dabs")
    .then(thread => {
      thread = thread.toObject();
      return Promise.all(
        thread.dabs.map(dab => {
          return Vote.find({ dab: dab._id }).then(votes => {
            dab.votes = votes;
          });
        })
      ).then(() => {
        res.json(thread);
      });
    })
    .catch(err => next(err));
});

// post dab on thread

router.post(
  "/:threadId/dabs",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const { link, description, opinion } = req.body;
    const creator = req.user.id;
    const creatorPic = req.user.picture;

    scrape(link)
      .then(metadata => {
        const extractedData = extractMetadata(metadata);
        const newDab = new Dab({
          link,
          opinion,
          creator,
          creatorPic,
          ...extractedData
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
              const data = dab.toObject();
              data.votes = [];
              res.json(data);
            }
          );
        });
      })
      .catch(err => {
        next(err);
      });
  }
);

function extractMetadata(data) {
  const ret = {};
  ret.title = data.general.title;
  ret.description = data.general.description;
  ret.lang = data.general.lang;

  if (data.openGraph) {
    const g = data.openGraph;
    ret.title = g.title || req.title;
    ret.description = g.description || req.description;
    ret.description = g.description || req.description;
    ret.image = g.image && g.image.url;
    ret.sourceName = g.site_name;
  }
  return ret;
}

module.exports = router;
