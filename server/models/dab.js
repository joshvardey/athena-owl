const mongoose = require("mongoose");
const { Schema } = mongoose;

const dabSchema = new Schema({
  link: String,
  description: String,
  creator: { type: Schema.Types.ObjectId, ref: "user" },
  timestamp: { type: Date, default: Date.now },
  opinion: Boolean
  // true= for, against= false
});

module.exports = mongoose.model("Dab", dabSchema);
