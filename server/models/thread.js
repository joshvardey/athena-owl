const mongoose = require("mongoose");
const { Schema } = mongoose;

const threadSchema = new Schema({
  title: String,
  dabs: [{ type: Schema.Types.ObjectId, ref: "Dab" }],
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  tags: { type: Array }
});

module.exports = mongoose.model("Thread", threadSchema);
