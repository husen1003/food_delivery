const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(`Connection Established!😁`.cyan.underline))
    .catch((error) => console.error(`Connection Error ${error}`.red.bold));
};

module.exports = { connectDb };
