const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "jvards",
  api_key: "792719639947119",
  api_secret: "PG5QUjKI7q_w96Pn0LDErTSE3Q4"
});

module.exports = {
  jwtSecret: process.env.JWT_SECRET || "MyS3cr3tK3Y",
  jwtSession: {
    session: false
  }
};
