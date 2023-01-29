const express = require("express");
const router = express.Router();

const menusRoutes = require("./menus");
const adminsRoutes = require("./admins");
const messagesRoutes = require("./messages");

router.use("/", menusRoutes);
router.use("/", adminsRoutes);
router.use("/", messagesRoutes);
router.use("/", (req, res) => {
    res.status(200).json({
        message: "karyakala API server.",
    });
});

module.exports = router;
