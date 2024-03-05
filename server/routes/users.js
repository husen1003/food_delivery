const express = require("express");
const Products = require("../models/products");
const Customers = require("../models/customer");

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
  const customers = await Customers.find();
  res.status(200).json({ data });
});

module.exports = app;
