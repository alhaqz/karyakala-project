const express = require("express");
const router = express.Router();

// GET about
router.get(
    "/about",
    wrapAsync(async (req, res, next) => {
        res.render();
    })
);

// GET work
router.get(
    "/work",
    wrapAsync(async (req, res, next) => {
        res.render();
    })
);

// GET contact
router.get(
    "/contact",
    wrapAsync(async (req, res, next) => {
        res.render();
    })
);

module.exports = router;
