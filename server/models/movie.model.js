const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
