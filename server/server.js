const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// we can use our enviroment variables
require("dotenv").config();

// this creates our express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection establish successfully");
});

// require the files and use the files
const moviesRouter = require("./routes/movies");
const usersRouter = require("./routes/users");
// when someone goes to our url/movies, its going to load everything in the moviesRouter
app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

// what starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
