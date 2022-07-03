const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  money: {
    type: Object,
  },
  history: {
    type: Object,
  },
});

module.exports = mongoose.model("users", UserSchema);
