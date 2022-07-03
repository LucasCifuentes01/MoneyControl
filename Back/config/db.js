const mongoose = require("mongoose");

const DB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/money_control";

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
      },
      (err) => {
        if (err) console.error("DB ERROR !!", err);
        if (!err) console.log("DB connected");
      }
    );
  };

  connect();
};
