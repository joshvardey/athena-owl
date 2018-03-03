const mongoose = require("mongoose");
const { Schema } = mongoose;

const threadSchema = new Schema({
  title: String,
  dabs: [{ type: Schema.Types.ObjectId, ref: "Dab" }],
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  tags: [{ type: String, enum: ["Politics", "Science", "Culture", "Religion"] }]
});

module.exports = mongoose.model("Thread", threadSchema);
