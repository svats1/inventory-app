const Category = require("../models/category");
const Item = require("../models/item");
const asyncHandler = require("express-async-handler");

// Display all categories
exports.item_list = asyncHandler(async (req, res) => {
  const allItems = await Item.find({}, "name").sort({ name: 1 }).exec();
  res.render("item_list", {
    title: "Items",
    items: allItems,
  });
});
