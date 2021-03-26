const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const showSchema = new Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    season: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
