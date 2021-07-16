const router = require("express").Router();
let Movie = require("../models/movies.model");

router.route("/").get((req, res) => {
  Movie.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
