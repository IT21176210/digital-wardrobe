var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClothSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cloth", ClothSchema);
