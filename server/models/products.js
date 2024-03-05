const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
});

module.exports = mongoose.model("products", productsSchema);
