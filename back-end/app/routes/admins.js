const express = require("express");
const adminsController = require("../controllers/admins");

const router = express.Router();

router.get("/login", adminsController.getLogin);
router.get("/dashboard", adminsController.getDashboard);

module.exports = router;
