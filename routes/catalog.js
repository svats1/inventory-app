const express = require("express");
const router = express.Router();

// Add all controllers here
const category_controller = require("../controllers/categoryController");
const item_controller = require("../controllers/itemController");

// Get route for home
router.get("/", category_controller.category_list);

// Get route for all items
router.get("/items", item_controller.item_list);

// Get routes for each category
router.get("/items/Keys", item_controller.keys_list);
router.get("/items/Strings", item_controller.strings_list);
router.get("/items/Percussion", item_controller.percussion_list);
router.get("/items/Wind", item_controller.wind_list);

// Routes for add new item page
router.get("/items/addNew", item_controller.item_create_get);
router.post("/items/addNew", item_controller.item_create_post);

// router.get("/item/:id", item_controller.item_details);
// router.put("/item/:id", item_controller.item_update);
// router.delete("/item/:id", item_controller.item_delete);

module.exports = router;
