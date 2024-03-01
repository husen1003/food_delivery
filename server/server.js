const express = require("express");
const cors = require("cors");

const { PORT, connectDb } = require("./config");
const routes = require("./routes");

const app = express();

app.use(express.json()); // to accept JSON data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use("/api/v1", routes);
app.use("/api/v1", routes);
app.use("/", (req, res) => {
  res.send("Welcome to our App!");
});
// app.use("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found",
//   });
// });

connectDb();

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});
