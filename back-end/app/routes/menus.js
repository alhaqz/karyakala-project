const express = require("express");
const menusController = require("../controllers/menus");

const router = express.Router();

router.get("/", menusController.getHomePage);
router.get("/about", menusController.getAboutPage);
router.get("/works", menusController.getWorksPage);
router.get("/contact", menusController.getContact);

module.exports = router;
