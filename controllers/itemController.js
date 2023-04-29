const Category = require("../models/category");
const Item = require("../models/item");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

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
  const allKeys = await Item.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $match: {
        "category.name": "Keys",
      },
    },
  ])
    .sort({ name: 1 })
    .exec();
  res.render("keys_list", {
    title: "Keys",
    items: allKeys,
  });
});

// Display all items in category 'Guitar'
exports.strings_list = asyncHandler(async (req, res) => {
  const allStrings = await Item.find({ category: req.params.id }, "name")
    .sort({ name: 1 })
    .exec();
  res.render("strings_list", {
    title: "Strings",
    items: allStrings,
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
