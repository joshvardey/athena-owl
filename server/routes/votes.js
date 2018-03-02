const express = require("express");
const router = express.Router();
const Thread = require("../models/thread");
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const Dab = require("../models/dab");

//post vote on dab

router.post(
  "/:dabid",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    const user = req.user.id;
    const dabId = req.params.dabid;
    const opinion = req.body;
    Dab.findById(dabId, (err, dab) => {
      if (err) {
        return next(err);
      }
      const dabCreator = dab.creator;
      const vote = new Vote({
        dab: dab._id,
        user,
        dabCreator: dabCreator
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

module.exports = router;
