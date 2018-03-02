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
    const dabId = req.params.id;
    const opinion = req.body;
    Dab.findById(dabId, dab => {
      const dabCreator = dab.creator;
    });
    const vote = new vote({
      dab,
      user,
      dabCreator
    });
    vote.save((err, vote) => {
      if (err) {
        return err;
      }
      res.json(vote);
    });
  }
);

module.exports = router;
