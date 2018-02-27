const mongoose = require("mongoose");
const { Schema } = mongoose;

const voteSchema = new Schema({
  dab: { type: Schema.Types.ObjectId, ref: "Dab" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  dabCreator: { type: Schema.Types.ObjectId, ref: "User" },
  opinion: Boolean
  // true = up, false = down
});

voteSchema.index({ dab: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("Vote", voteSchema);
