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

// Display all items in category 'Keys'
exports.keys_list = asyncHandler(async (req, res) => {
  const allKeys = await Item.find({ category: req.params.id }, "name")
    .sort({ name: 1 })
    .exec();
  res.render("keys_list", {
    title: "Keys",
    items: allKeys,
  });
});

// Display all items in category 'Guitar'
exports.guitar_list = asyncHandler(async (req, res) => {
  const allGuitars = await Item.find({ category: req.params.id }, "name")
    .sort({ name: 1 })
    .exec();
  res.render("guitar_list", {
    title: "Guitars",
    items: allGuitars,
  });
});

// Display all items in category 'Drums'
exports.percussion_list = asyncHandler(async (req, res) => {
  const allPercussion = await Item.find({ category: req.params.id }, "name")
    .sort({ name: 1 })
    .exec();
  res.render("percussion_list", {
    title: "Percussion",
    items: allPercussion,
  });
});

// Display all items in category 'Wind'
exports.wind_list = asyncHandler(async (req, res) => {
  const allWind = await Item.find({ category: req.params.id }, "name")
    .sort({ name: 1 })
    .exec();
  res.render("wind_list", {
    title: "Wind",
    items: allWind,
  });
});
