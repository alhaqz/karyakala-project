const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name can not be blank"],
    },
    email: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    foundUs: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
