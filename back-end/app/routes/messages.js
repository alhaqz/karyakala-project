const express = require("express");
const wrapAsync = require("./WrapAsync");
const router = express.Router();

app.get(
    "/",
    wrapAsync((req, res, next) => {
        res.send("Hi this is databases.");
    })
);

app.post(
    "/",
    wrapAsync(async (req, res, next) => {
        // const newMessage = new Message(req.body.message);
        // await newMessage.save();
        // res.redirect("#messageSection");
    })
);
