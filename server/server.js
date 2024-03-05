const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const { PORT, connectDb } = require("./config");
const routes = require("./routes");

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "General Authentication Demo Project",
      description: "Genereal Auth Project Application API",
      contact: {
        name: "Karthik A",
      },
    },
    securityDefinitions: {
      Bearer: {
        description:
          "Enter the token with the `Bearer` prefix, e.g. 'Bearer abcde12345'",
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [
      {
        Bearer: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/**.js", "./routes/**/**.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json()); // to accept JSON data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use("/api/v1", routes);
app.use("/v1/api", routes);
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
