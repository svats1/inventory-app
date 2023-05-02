const Category = require("../models/category");
const Item = require("../models/item");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

// Get all items
exports.item_list = asyncHandler(async (req, res) => {
  const allItems = await Item.find({}, "name price quantity")
    .sort({ name: 1 })
    .exec();
  res.render("item_list", {
    title: "Items",
    items: allItems,
  });
});

// Get all items in category 'Keys'
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

// Get all items in category 'Strings'
exports.strings_list = asyncHandler(async (req, res) => {
  const allStrings = await Item.aggregate([
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
        "category.name": "Strings",
      },
    },
  ])
    .sort({ name: 1 })
    .exec();
  res.render("strings_list", {
    title: "Strings",
    items: allStrings,
  });
});

// Get all items in category 'Percussion'
exports.percussion_list = asyncHandler(async (req, res) => {
  const allPercussion = await Item.aggregate([
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
        "category.name": "Percussion",
      },
    },
  ])
    .sort({ name: 1 })
    .exec();
  res.render("percussion_list", {
    title: "Percussion",
    items: allPercussion,
  });
});

// Get all items in category 'Wind'
exports.wind_list = asyncHandler(async (req, res) => {
  const allWind = await Item.aggregate([
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
        "category.name": "Wind",
      },
    },
  ])
    .sort({ name: 1 })
    .exec();
  res.render("wind_list", {
    title: "Wind",
    items: allWind,
  });
});

// GET method for creating new item
exports.item_create_get = asyncHandler(async (req, res) => {
  // const allCategories = await Category.find({}, "name");
  res.render("item_form", {
    title: "Create Item",
  });
});

// POST method for creating new item
exports.item_create_post = asyncHandler(async (req, res) => {
  const category_id = await Category.findOne(
    { name: req.body.category },
    "_id"
  );
  const { name, description, price, brand, model, quantity } = req.body;
  const newItem = new Item({
    name,
    description,
    price,
    category: category_id._id,
    brand,
    model,
    quantity,
  });
  newItem.save();
  res.redirect("/catalog/items");
});
