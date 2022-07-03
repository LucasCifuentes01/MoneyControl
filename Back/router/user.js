const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.json(`Devuelvo datos de usuario: ${req.params.id}`);
});

router.post("/", (req, res) => {
  User.create(req.body);
  res.sendStatus(200);
});

module.exports = router;
