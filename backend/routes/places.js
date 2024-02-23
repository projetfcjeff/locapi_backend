var express = require("express");
var router = express.Router();

// require('../models/connection');
const User = require("../models/users");

router.post("/", (req, res) => {
  User.findOne({ name: req.body.name }).then((data) => {
    if (data === null) {
      const newUser = new User({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      });

      newUser.save().then((newDoc) => {
        res.json({ result: true });
      });
    } else {
      // Location already exists in database
      res.json({ result: false, error: "Location already exists" });
    }
  });
});

//GET /places/:nickname : récupération de tous les marqueurs d’un utilisateur en fonction de son surnom (via req.params)
router.get("/:nickname", (req, res) => {
  User.find({ nickname: req.params.nickname }).then((data) => {
    // if (data.length) {
      res.json({ result: true, places: data });
    // } else {
    //   res.json({ result: false, error: "Nickname does not exist" });
    //   console.log(data);
    // }
  });
});

//DELETE /places : suppression d’un marqueur à partir de son nom et du surnom de l’utilisateur (via req.body)
router.delete("/", (req, res) => {
  const { nickname, name } = req.body;

  User.deleteOne({ nickname, name }).then((deletedDoc) => {
    if (deletedDoc.deletedCount > 0) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: "Place not found" });
    }
  });
});

module.exports = router;
