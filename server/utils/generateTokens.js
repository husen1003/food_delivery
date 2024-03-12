const jwt = require("jsonwebtoken");

const generateWebToken = (data = {}) => {
  return jwt.sign(data, process.env.TOKEN_SCERET_KEY, {
    expiresIn: "1d",
  });
};

module.exports = generateWebToken;
