const express = require("express");
const cors = require("cors");
const exampleRoutes = require("./routes/hello");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/example", exampleRoutes);

module.exports = app;
