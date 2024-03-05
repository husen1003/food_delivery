const express = require("express");
const userRoutes = require("./users");
const adminRoutes = require("./admin");

const app = express();

// app.use("/", (req, res) => {
//   res.json({ message: "index API" });
// });

app.use("/users", userRoutes);
app.use("/admin", adminRoutes);

module.exports = app;
