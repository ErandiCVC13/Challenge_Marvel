const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

const { port, mongoUrl } = config;

const app = express();

//Conection DB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successful");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
