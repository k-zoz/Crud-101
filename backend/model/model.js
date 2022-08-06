const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  product: {
    type: String,
    required: [true, "must provide a product name"],
    trim: true,
    maxlength: [20, "Product name is more than 20 characters"],
    minlength: [2, "Product name is less than 2 characters"],
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", productsSchema);
