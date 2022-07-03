const mongoose = require("mongoose");

const DollarPriceSchema = new mongoose.Schema({
  fecha: {
    type: String,
  },
  compra: {
    type: Number,
  },
  venta: {
    type: Number,
  },
});

module.exports = mongoose.model("dollar_prices", DollarPriceSchema);
