const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const showSchema = new Schema(
  {
    poster: { type: String, required: true },
    title: { type: String, required: true },
    overview: { type: String, required: true },
    date: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
