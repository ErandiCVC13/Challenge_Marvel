const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const moviesRouter = require("./routes/movies");

const { port, mongoUrl } = config;

const app = express();
app.use(cors());
app.use(express.json());

//Conection DB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successful");
});

//Routes
app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
