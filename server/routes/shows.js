const router = require("express").Router();
let Show = require("../models/show.model");

router.route("/").get((req, res) => {
  Show.find()
    .then((shows) => res.json(shows.sort((a, b) => b.createdAt - a.createdAt)))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const poster = req.body.poster;
  const title = req.body.title;
  const overview = req.body.overview;
  const date = req.body.date;
  const type = req.body.type;

  const newShow = new Show({
    poster,
    title,
    overview,
    date,
    type,
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
      show.poster = req.body.poster;
      show.title = req.body.title;
      show.overview = req.body.overview;
      show.date = req.body.date;
      show.type = req.body.type;

      show
        .save()
        .then(() => res.json("Show updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
