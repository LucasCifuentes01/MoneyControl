const express = require("express");
const cron = require("node-cron");
const initDB = require("./config/db");
const userRouter = require("./router/user");
const dollarRouter = require("./router/dollar");
const Dollar = require("./models/dollar");
const axios = require("axios");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3002;
const dollarEndpoint = process.env.DOLLAR_ENDPOINT;

cron.schedule("0 8 * * *", () => {
  axios.get(dollarEndpoint).then((data) => {
    const dataFormated = {
      fecha: getDate(),
      compra: Number(data.data.compra),
      venta: Number(data.data.venta),
    };
    Dollar.db.dropCollection("dollar_prices");
    Dollar.create(dataFormated);
  });
});

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/dollar", dollarRouter);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  initDB();
});

const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
