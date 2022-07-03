const express = require("express");
const Dollar = require("../models/dollar");

const router = express.Router();

router.get("/", (req, res) => {
  Dollar.find((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const response = data[0];
      res.json({
        fecha: response.fecha,
        compra: response.compra,
        venta: response.venta,
      });
    }
  });
});

module.exports = router;
