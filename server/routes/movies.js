const router = require("express").Router();
let Movie = require("../models/movie.model");

router.route("/").get((req, res) => {
  Movie.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const year = req.body.year;
  const image = req.body.image;
  const rating = Number(req.body.rating);
  const link = req.body.link;

  const newMovie = new Movie({
    username,
    title,
    year,
    image,
    rating,
    link,
  });

  newMovie
    .save()
    .then(() => res.json("Movie added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
