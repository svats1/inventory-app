const express = require("express");
const router = express.Router();

// Add all controllers here
const category_controller = require("../controllers/categoryController");
const item_controller = require("../controllers/itemController");

// Routes

router.get("/", category_controller.category_list);

// router.get("/item", item_controller.item_list);

// router.post("/item", item_controller.item_create);

// router.get("/item/:id", item_controller.item_details);
// router.put("/item/:id", item_controller.item_update);
// router.delete("/item/:id", item_controller.item_delete);

module.exports = router;
