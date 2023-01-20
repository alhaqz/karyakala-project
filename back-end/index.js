const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const menuBarRoutes = require("./routes/menubar.js");
const adminRoutes = require("./routes/admin");
const messageRoutes = require("./routes/message");

const Message = require("./models/messages");

// Database Connection
mongoose.connect("mongodb://localhost:27017/karyakala-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// END POINT
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

// GET landing page
app.get(
    "/",
    wrapAsync(async (req, res, next) => {
        res.render();
    })
);

// API menubar
app.use("/", menuBarRoutes);

// API admin
app.use("/admin", adminRoutes);

// API database
app.use("/message", messageRoutes);

app.listen(3000, () => {
    console.log("Listening to Port 3000");
});
