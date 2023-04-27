const Category = require("../models/category");
const Item = require("../models/item");
const asyncHandler = require("express-async-handler");

// Display all categories
exports.category_list = asyncHandler(async (req, res) => {
  const allCategories = await Category.find({}, "name")
    .sort({ name: 1 })
    .exec();
  res.render("category_list", {
    title: "Category List",
    categories: allCategories,
  });
});
