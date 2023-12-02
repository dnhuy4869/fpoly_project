const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);