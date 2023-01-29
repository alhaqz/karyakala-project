const express = require("express");
const messagesController = require("../controllers/messages");

const router = express.Router();

router.get("/dashboard", messagesController.getAllMessages);
router.post("/", messagesController.createNewMessage);

module.exports = router;
