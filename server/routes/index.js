const express = require("express");
const userRoutes = require("./users");

const app = express();

// app.use("/", (req, res) => {
//   res.json({ message: "index API" });
// });

app.use("/users", userRoutes);

module.exports = app;
