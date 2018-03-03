const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "jvards",
  api_key: "176625832644176",
  api_secret: "9y_MBWd1sI3CLIxaBVTbo8gBtIY"
});

module.exports = {
  jwtSecret: process.env.JWT_SECRET || "MyS3cr3tK3Y",
  jwtSession: {
    session: false
  }
};
