const mongoose = require("mongoose");
const { Schema } = mongoose;

const threadSchema = new Schema({
  title: String,
  dabsFor: [{ type: Schema.Types.ObjectId, ref: "dab" }],
  dabsAgainst: [{ type: Schema.Types.ObjectId, ref: "dab" }],
  creator: { type: Schema.Types.ObjectId, ref: "user" },
  Tag: { type: String, enum: ["Politics", "Science", "Culture", "Religion"] }
});

module.exports = mongoose.model("Thread", threadSchema);
