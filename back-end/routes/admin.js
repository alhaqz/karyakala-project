const express = require("express");
const router = express.Router();

// GET login
router.get(
    "/login",
    wrapAsync(async (req, res, next) => {
        res.render();
    })
);

// GET dashboard
router.get(
    "/dashboard",
    wrapAsync(async (req, res, next) => {
        res.render();
    })
);
