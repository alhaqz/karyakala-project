const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const path = require("path");

const app = express();

// const Message = require("./models/messages");

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

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

// local port
app.listen(3000, () => {
    console.log("Listening to Port 3000");
});
