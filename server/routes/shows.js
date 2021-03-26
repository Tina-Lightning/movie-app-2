const router = require("express").Router();
let Show = require("../models/show.model");

router.route("/").get((req, res) => {
  Show.find()
    .then((shows) => res.json(shows.sort((a, b) => b.createdAt - a.createdAt)))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const year = req.body.year;
  const season = req.body.season;
  const image = req.body.image;
  const rating = Number(req.body.rating);
  const link = req.body.link;

  const newShow = new Show({
    username,
    title,
    year,
    season,
    image,
    rating,
    link,
  });

  newShow
    .save()
    .then(() => res.json("Show added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Show.findById(req.params.id)
    .then((show) => res.json(show))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Show.findByIdAndDelete(req.params.id)
    .then(() => res.json("Show deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Show.findById(req.params.id)
    .then((show) => {
      show.username = req.body.username;
      show.title = req.body.title;
      show.year = req.body.year;
      show.season = req.body.season;
      show.image = req.body.image;
      show.rating = Number(req.body.rating);
      show.link = req.body.link;

      show
        .save()
        .then(() => res.json("Show updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
