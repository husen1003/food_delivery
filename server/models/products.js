const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
});

module.exports = mongoose.model("products", productsSchema);
