const express = require("express");
const Products = require("../models/products");

const app = express();

app.get("/get-users", (req, res) => {
  res.status(200).json({
    status: true,
    data: ["Bipin", "Poonam", "Sankik", "Husen"],
    message: "Users fetched successfully!",
  });
});

app.get("/products", async (req, res) => {
  const data = await Products.find();
  res.status(200).json({ data });
});

module.exports = app;
