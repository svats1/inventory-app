const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  quantity: { type: Number, required: true },
});

// Create a virtual for the url
itemSchema.virtual("url").get(function () {
  return `/category/item/${this._id}`;
});

module.exports = mongoose.model("Item", itemSchema);
