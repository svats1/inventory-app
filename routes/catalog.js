const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

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

//
// router.get("/items/added", item_controller.item_added_get);
// router.post("/items/added", item_controller.item_added_post);

// // Routes for edit item page
// router.get("/items/edit/:id", item_controller.item_edit_get);
// router.post("/items/edit/:id", item_controller.item_edit_post);

// // Routes for delete item page
// router.get("/items/delete/:id", item_controller.item_delete_get);
// router.post("/items/delete/:id", item_controller.item_delete_post);

// // Routes for search page
// router.get("/items/search", item_controller.item_search_get);
// router.post("/items/search", item_controller.item_search_post);

// // Routes for item details page
// router.get("/items/details/:id", item_controller.item_details_get);
// router.post("/items/details/:id", item_controller.item_details_post);

// // Routes for add to cart page
// router.get("/items/cart", item_controller.item_cart_get);

// // Routes for edit item page
// router.get("/items/edit/:id", item_controller.item_edit_get);
// router.post("/items/edit/:id", item_controller.item_edit_post);

// // Routes for delete item page
// router.get("/items/delete/:id", item_controller.item_delete_get);
// router.post("/items/delete/:id", item_controller.item_delete_post);

// // Routes for search page
// router.get("/items/search", item_controller.item_search_get);
// router.post("/items/search", item_controller.item_search_post);

// // Routes for item details page
// router.get("/items/details/:id", item_controller.item_details_get);
// router.post("/items/details/:id", item_controller.item_details_post);

// // Routes for add to cart page
// router.get("/items/cart", item_controller.item_cart_get);
// router.post("/items/cart", item_controller.item_cart_post);

// Routes for checkout page

// router.get("/item/:id", item_controller.item_details);
// router.put("/item/:id", item_controller.item_update);
// router.delete("/item/:id", item_controller.item_delete);

module.exports = router;
