require("dotenv").config();
require("colors");
const { connectDb } = require("./dbConfig");
const { generateToken } = require("./generateToken");

const PORT = process.env.PORT || 5000;

module.exports = {
  PORT,
  connectDb,
  generateToken,
};
