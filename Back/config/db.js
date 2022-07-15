const mongoose = require("mongoose");

const DB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://lucas_cifuentes:lola12345@moneycontrol.x33d1.mongodb.net/?retryWrites=true&w=majority";

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
