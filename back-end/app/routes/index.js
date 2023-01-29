const express = require("express");
const router = express.Router();

const menuRoutes = require("./menu");
const adminRoutes = require("./admin");
const messageRoutes = require("./message");

router.use("/", menuRoutes);
router.use("/", adminRoutes);
router.use("/", messageRoutes);
router.use("/", (req, res) => {
    res.status(200).json({
        message: "karyakala API server.",
    });
});

module.exports = router;
