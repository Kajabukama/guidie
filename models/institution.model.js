const mongoose = require("mongoose");

const institutionSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true },
  category: { type: String, required: true },
  region: { tyep: String, required: false },
  address: { type: String, required: true },
  courses: { type: Array, required: false },
  programmes: { type: Array, required: true },
  description: { type: Array, required: false },
});

module.exports = mongoose.model("Institution", institutionSchema);
