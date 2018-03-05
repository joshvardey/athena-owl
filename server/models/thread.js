const mongoose = require("mongoose");
const { Schema } = mongoose;

const threadSchema = new Schema({
  title: String,
  description: String,
  dabs: [{ type: Schema.Types.ObjectId, ref: "Dab" }],
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  tags: { type: Array },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Thread", threadSchema);
