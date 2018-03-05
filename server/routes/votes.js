const express = require("express");
const router = express.Router();
const Thread = require("../models/thread");
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const Dab = require("../models/dab");
const Vote = require("../models/vote");

//post vote on dab

router.post(
  "/:dabId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const user = req.user.id;
    const dabId = req.params.dabId;
    const opinion = req.body.opinion;
    Dab.findById(dabId, (err, dab) => {
      if (err) {
        return next(err);
      }
      const dabCreator = dab.creator;
      debugger;
      const vote = new Vote({
        dab: dab._id,
        user: user,
        dabCreator: dabCreator,
        opinion: opinion
      });
      vote.save((err, vote) => {
        if (err) {
          return next(err);
        }
        res.json(vote);
      });
    });
  }
);

//get votes for dab

// router.get("/:dabId", (req, res, next) => {
//   Vote.find({ dab: req.params.dabId })
//     .then(votes => {
//       res.json(votes);
//     })
//     .catch(err => next(err));
// });

module.exports = router;
