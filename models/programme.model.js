const mongoose = require("mongoose");

const programmeScheme = mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String, required: false },
});

module.exports = mongoose.model("Programme", programmeScheme);
